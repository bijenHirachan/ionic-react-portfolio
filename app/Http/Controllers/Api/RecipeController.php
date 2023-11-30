<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\RecipecategoryResource;
use App\Http\Resources\RecipeResource;
use App\Models\Category;
use App\Models\Recipe;
use App\Models\Recipecategory;
use App\Models\Recipestep;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    public function index()
    {
        $recipes = Recipe::latest()->get();

        return  RecipeResource::collection($recipes);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'description' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048'
        ]);

        if($validated['image']){
            $image = $validated['image'];
            $fileName = pathinfo($image->getClientOriginalName())['filename'];
            $path = $image->storeAs('recipe_images', $fileName . time() .".". $request->file('image')->getClientOriginalExtension(), 'public');

        }

        $recipe = Recipe::create([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'image_url' => $path ?? NULL
        ]);

        return new RecipeResource($recipe);
    }

    public function show(Recipe $recipe)
    {
        return new RecipeResource($recipe);
    }

    public function update(Request $request, Recipe $recipe)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'description' => 'required',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048'
        ]);

        if($validated['image']){
            $image = $validated['image'];
            $fileName = pathinfo($image->getClientOriginalName())['filename'];
            $path = $image->storeAs('recipe_images', $fileName . time() .".". $request->file('image')->getClientOriginalExtension(), 'public');

        }

        $recipe->update([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'image_url' => $path ?? $recipe->image_url
        ]);

        return new RecipeResource($recipe);
    }

    public function destroy(Recipe $recipe)
    {
        $recipe->delete();

        return response()->json([
            'message' => "Recipe deleted successfully"
        ]);
    }

    public function createStep(Request $request, Recipe $recipe)
    {
        $validated = $request->validate([
            'step' => "required"
        ]);

        $step = Recipestep::create([
            'step' => $validated['step'],
            'recipe_id' => $recipe->id
        ]);

        return $step;
    }

    public function deleteStep(Recipestep $recipestep)
    {
        $recipestep->delete();

        return response()->json([
            'message' => "Step deleted successfully"
        ]);
    }

    public function createCategory(Request $request)
    {
        $validated = $request->validate([
            'category' => 'required'
        ]);

        $categoryExists = Recipecategory::where('category', strtoupper($validated['category']))->first();

        if($categoryExists) return;

        $category = Recipecategory::create([
            'category' => strtoupper(
                $validated['category']
            )
        ]);

        return $category;
    }

    public function deleteCategory(Recipecategory $recipecategory)
    {
        $recipecategory->delete();

        return response()->json([
            'message' => "Category deleted successfully"
        ]);
    }

    public function addCategory(Recipe $recipe, Request $request)
    {
        $newCategories = array_diff($request->categories, $recipe->recipeCategories->pluck('id')->toArray());

        $recipe->recipeCategories()->attach($newCategories);
    }

    public function removeCategory(Recipe $recipe, Request $request)
    {
        $recipe->recipeCategories()->detach($request->categories);
    }

    public function allCategories(Request $request)
    {
        return RecipecategoryResource::collection(Recipecategory::where('category', 'LIKE', '%'.$request->search.'%')->orderBy('category')->get());
    }

    public function recipeCategories(Recipecategory $recipecategory)
    {
        return RecipeResource::collection($recipecategory->recipes);
    }
}
