<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Api\TeacherDetailsController;
use App\Models\TeacherDetails;
use Illuminate\Http\Request;

class TeacherDetailsController extends Controller
{
    public function index()
    {
        return response()->json(TeacherDetails::all(), 200);
    }

    public function show(string $id)
    {
        $teacherDetails = TeacherDetails::find($id);
        if (!$teacherDetails) {
            return response()->json(['message' => 'TeacherDetails not found'], 404);
        }
        return response()->json($teacherDetails, 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'teacherId' => 'required|string|max:255',
            'name' => 'nullable|string',
            'dateOfJoining' => 'nullable|string',
        ]);

        $teacherDetails = TeacherDetails::create($validated);

        return response()->json($teacherDetails, 201);
    }

    public function update(Request $request, $id)
    {
        $teacherDetails = TeacherDetails::find($id);
        if (!$teacherDetails) {
            return response()->json(['message' => 'TeacherDetails not found'], 404);
        }

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'content' => 'nullable|string',
        ]);

        $teacherDetails->update($validated);

        return response()->json($teacherDetails, 200);
    }
    
    public function destroy($id)
    {
        $teacherDetails = TeacherDetails::find($id);
        if (!$teacherDetails) {
            return response()->json(['message' => 'TeacherDetails not found'], 404);
        }

        $teacherDetails->delete();
        return response()->json(['message' => 'TeacherDetails deleted successfully'], 200);
    }
}
