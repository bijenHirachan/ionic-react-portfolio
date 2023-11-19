<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return Inertia::render('Admin/Projects/Index', [
            'projects' => Project::where('title', 'LIKE', '%'.$request->query('search').'%')
            ->latest()
            ->paginate(5),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Projects/Create',[
            'categories' => Category::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        $validated = $request->validated();

        if($validated['image']){
            $image = $validated['image'];
            $fileName = pathinfo($image->getClientOriginalName())['filename'];
            $path = $image->storeAs('blog_images', $fileName . time() .".". $request->file('image')->getClientOriginalExtension(), 'public');

        }

        $project = Project::create([
            'title' => $validated['title'],
            'slug' => str()->slug($validated['title']),
            'demo_link' => $validated['demoLink'],
            'excerpt' => $validated['excerpt'],
            'description' => $validated['description'],
            'image_url' => $path ?? NULL,
        ]);

        $project->categories()->attach($validated['categories']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        return Inertia::render('Admin/Projects/Edit', [
            'project' => $project,
            'currentCategories' => $project->categories->pluck('id'),
            'categories' => Category::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        $validated = $request->validated();

        if($validated['image']){
            $image = $validated['image'];
            $fileName = pathinfo($image->getClientOriginalName())['filename'];
            $path = $image->storeAs('blog_images', $fileName . time() .".". $request->file('image')->getClientOriginalExtension(), 'public');

        }

        $project->update([
            'title' => $validated['title'],
            'excerpt' => $validated['excerpt'],
            'demo_link' => $validated['demoLink'],
            'description' => $validated['description'],
            'image_url' => $path ?? $project->image_url,
        ]);

        $existingCategoriesArray = $project->categories->pluck('id')->toArray();

        $project->categories()->detach($existingCategoriesArray);
        $project->categories()->attach($validated['categories']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete();
    }
}
