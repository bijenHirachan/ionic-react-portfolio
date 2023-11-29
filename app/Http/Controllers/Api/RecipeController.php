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
            'image_url' => 'nullable'
        ]);

        $recipe = Recipe::create([
            'title' => $validated['title'],
            'description' => $validated['description'],
            'image_url' => $validated['image_url']
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
        ]);

        $recipe->update([
            'title' => $validated['title'],
            'description' => $validated['description']
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

    public function allCategories()
    {
        return RecipecategoryResource::collection(Recipecategory::all());
    }
}
