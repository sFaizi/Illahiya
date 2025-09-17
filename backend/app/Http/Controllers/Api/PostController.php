<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
  // GET /api/posts
    public function index()
    {
        return response()->json(Post::all(), 200);
    }

    // GET /api/posts/{id}
    public function show($id)
    {
        $post = Post::find($id);
        if (!$post) {
            return response()->json(['message' => 'Post not found'], 404);
        }
        return response()->json($post, 200);
    }

    // POST /api/posts
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'nullable|string',
        ]);

        $post = Post::create($validated);

        return response()->json($post, 201);
    }

    // PUT /api/posts/{id}
    public function update(Request $request, $id)
    {
        $post = Post::find($id);
        if (!$post) {
            return response()->json(['message' => 'Post not found'], 404);
        }

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'content' => 'nullable|string',
        ]);

        $post->update($validated);

        return response()->json($post, 200);
    }

    // DELETE /api/posts/{id}
    public function destroy($id)
    {
        $post = Post::find($id);
        if (!$post) {
            return response()->json(['message' => 'Post not found'], 404);
        }

        $post->delete();
        return response()->json(['message' => 'Post deleted successfully'], 200);
    }
}
