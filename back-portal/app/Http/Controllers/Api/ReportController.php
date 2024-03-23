<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Report;
use App\Http\Requests\StoreReportRequest;
use App\Http\Requests\UpdateReportRequest;
use App\Http\Resources\ReportResource;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ReportResource::collection(
            Report::paginate(3)
        );
    }

    public function getNews()
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreReportRequest $request)
    {
        //
        $data = $request->validated();
        $documentName = null;
        $imageName = str::random(32) . '.' . $data['image']->getClientOriginalExtension();
        Storage::disk('public')->put($imageName, file_get_contents($data['image']));

        if (isset($data['document']) && $data['document']) {
            $documentName = Str::random(32) . '.' . $data['document']->getClientOriginalExtension();
            Storage::disk('public')->put($documentName, file_get_contents($data['document']));
        }

        $data['image'] = $imageName;
        $data['document'] = $documentName;

        $report = Report::create($data);

        return response(new ReportResource($report) , 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Report $report)
    {
        return new ReportResource($report);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateReportRequest $request, Report $report)
    {
            $data = $request->validated();
            $imageName = $report['image'];
            $documentName = $report['document'];

            // Si se proporciona una nueva imagen, actualizarla
            if ($request->hasFile('image')) {
                $imageName = Str::random(32) . '.' . $request->image->getClientOriginalExtension();
                Storage::disk('public')->put($imageName, file_get_contents($request->image));
                $data['image'] = $imageName;
            }

            // Si se proporciona un nuevo documento, actualizarlo
            if ($request->hasFile('document')) {
                $documentName = Str::random(32) . '.' . $request->document->getClientOriginalExtension();
                Storage::disk('public')->put($documentName, file_get_contents($request->document));
                $data['document'] = $documentName;
            }

            $report->update($data);

            return new ReportResource($report);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Report $report)
    {
        $report->delete();

        return response("", 204);
    }
}
