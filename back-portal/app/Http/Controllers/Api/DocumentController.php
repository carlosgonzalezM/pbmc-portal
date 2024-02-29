<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Document;
use App\Http\Requests\StoreDocumentRequest;
use App\Http\Requests\UpdateDocumentRequest;
use App\Http\Resources\DocumentResource;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class DocumentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return DocumentResource::collection(
            Document::query()->orderBy('id', 'desc')
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDocumentRequest $request)
    {
        $data = $request->validated();

        $documentName = Str::random(32) . '.' . $data['document']->getClientOriginalExtension();
        Storage::disk('public')->put( $documentName , file_get_contents($data['document']));

        $data['document'] = $documentName;

        $document = Document::create($data);

        return response(new DocumentResource($document), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Document $document)
    {
        return new DocumentResource($document);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDocumentRequest $request, Document $document)
    {
        $data = $request->validated();
        $documentName = $document['document'];


        if ($request->hasFile('document')) {
            $documentName = Str::random(32) . '.' . $request->document->getClientOriginalExtension();
            Storage::disk('public')->put($documentName, file_get_contents($request->document));
            $data['document'] = $documentName;
        }

        $document->update($data);

        return new DocumentResource($document);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Document $document)
    {
        $document->delete();

        return response("", 204);
    }
}
