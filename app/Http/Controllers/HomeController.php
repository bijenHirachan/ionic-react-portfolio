<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Product;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/Home');
    }

    public function contact()
    {
        return Inertia::render('Home/Contact');
    }

    public function blogs()
    {
        return Inertia::render('Home/Blogs', [
            'blogs' => Blog::latest()->get()
        ]);
    }

    public function blogDetails(Blog $blog)
    {
        return Inertia::render('Home/BlogDetails', [
            'blog' => $blog
        ]);
    }

    public function projectDetails(Project $project)
    {
        return Inertia::render('Home/ProjectDetails', [
            'project' => $project
        ]);
    }

    public function projects()
    {
        return Inertia::render('Home/Projects', [
            'projects' => Project::all()
        ]);
    }

    public function shopDemo(Request $request)
    {
        return Inertia::render('Home/ShopDemo', [
            'products' => Product::where('title', 'LIKE','%'.$request->search.'%')->get()
        ]);
    }

    public function searchProducts(Request $request)
    {
        return Inertia::render('Home/ShopDemo', [
            'products' => Product::where('title', 'LIKE', '%'.$request->search.'%')->get()
        ]);
    }
}
