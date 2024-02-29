<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Birthday;
use App\Http\Requests\StoreBirthdayRequest;
use App\Http\Requests\UpdateBirthdayRequest;
use App\Http\Resources\BirthdayResource;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class BirthdayController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return BirthdayResource::collection(
            Birthday::query()->orderBy('id','desc')
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBirthdayRequest $request)
    {
        $data = $request->validated();

        $imageName = null;

        if ($request->hasFile('image')) {
            $imageName = Str::random(32).".".$data['image']->getClientOriginalExtension();
            Storage::disk('public')->put($imageName, file_get_contents($data['image']));
        }

        $data['image'] = $imageName;

        $birthday = Birthday::create($data);

        return response(new BirthdayResource($birthday), 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(Birthday $birthday)
    {
        return new BirthdayResource($birthday);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBirthdayRequest $request, Birthday $birthday)
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $imageName = Str::random(32) . '.' . $request->image->getClientOriginalExtension();
            Storage::disk('public')->put($imageName, file_get_contents($request->image));
            $data['image'] = $imageName;
        }

        $birthday->update($data);

        return new BirthdayResource($birthday);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Birthday $birthday)
    {
        $birthday->delete();

        return response("",204);
    }
}
