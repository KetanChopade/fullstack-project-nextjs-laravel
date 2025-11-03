<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Section;

class SectionController extends Controller
{
    // ✅ Get section by key
    public function show($key)
    {
        $section = Section::where('section_key', $key)->first();

        if (!$section) {
            return response()->json(['message' => 'Section not found'], 404);
        }

        return response()->json($section);
    }

    // ✅ Update section by key (used by Admin Publish)
    public function update(Request $request, $key)
    {
        $section = Section::where('section_key', $key)->first();

        if (!$section) {
            return response()->json(['message' => 'Section not found'], 404);
        }

        $validated = $request->validate([
            'title' => 'required|string',
            'cards' => 'required|array',
        ]);

        $section->title = $validated['title'];
        $section->cards = json_encode($validated['cards']);
        $section->save();

        return response()->json([
            'message' => 'Section updated successfully!',
            'data' => $section,
        ]);
    }
}
