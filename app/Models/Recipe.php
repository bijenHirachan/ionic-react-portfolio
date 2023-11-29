<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Recipe extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'image_url'
    ];

    public function recipeSteps(): HasMany
    {
        return $this->hasMany(Recipestep::class);
    }

    public function recipeCategories(): BelongsToMany
    {
        return $this->belongsToMany(Recipecategory::class);
    }
}
