<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return Inertia::render("Admin/Blogs/Index",[
            'blogs' => Blog::where('title', 'LIKE', '%'.$request->query('search').'%')
                        ->latest()
                        ->paginate(5)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Admin/Blogs/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlogRequest $request)
    {
        $validated = $request->validated();

        if($validated['image']){
            $image = $validated['image'];
            $fileName = pathinfo($image->getClientOriginalName())['filename'];
            $path = $image->storeAs('blog_images', $fileName . time() .".". $request->file('image')->getClientOriginalExtension(), 'public');

        }

        Blog::create([
            'title' => $validated['title'],
            'slug' => str()->slug($validated['title']),
            'excerpt' => $validated['excerpt'],
            'description' => $validated['description'],
            'image_url' => $path ?? NULL
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog)
    {
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        return Inertia::render('Admin/Blogs/Edit', [
            'blog' => $blog
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBlogRequest $request, Blog $blog)
    {
        $validated = $request->validated();

        if($validated['image']){
            $image = $validated['image'];
            $fileName = pathinfo($image->getClientOriginalName())['filename'];
            $path = $image->storeAs('blog_images', $fileName . time() .".". $request->file('image')->getClientOriginalExtension(), 'public');

        }

        $blog->update([
            'title' => $validated['title'],
            'excerpt' => $validated['excerpt'],
            'description' => $validated['description'],
            'image_url' => $path ?? $blog->image_url
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        $blog->delete();
    }
}
