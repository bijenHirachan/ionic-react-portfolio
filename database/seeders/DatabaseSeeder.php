<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        \App\Models\Product::create([
            'title' => 'Adidas Shoe',
            'description' => 'Adidas mens Gazelle Shoes',
            'image_url' => 'images/adidas_shoe',
            'stock' => 43,
            'price' => 9999,
        ]);
        \App\Models\Product::create([
            'title' => 'Adidas Trouser',
            'description' => "Adidas Men's Essentials Warm-up Open Hem 3-stripes Tracksuit Pants",
            'image_url' => 'images/adidas_trouser',
            'stock' => 23,
            'price' => 3375,
        ]);
        \App\Models\Product::create([
            'title' => 'Adidas Jacket',
            'description' => "adidas Men's Designed 4 Game Day Fullzip",
            'image_url' => 'images/adidas_jacket',
            'stock' => 45,
            'price' => 11000,
        ]);
        \App\Models\Product::create([
            'title' => 'Nike Shoe',
            'description' => "Nike Revolution 6 NN Men's Road Running Shoes",
            'image_url' => 'images/nike_shoe',
            'stock' => 5,
            'price' => 5497,
        ]);
        \App\Models\Product::create([
            'title' => 'Nike Trousers',
            'description' => "Nike Club Fleece Men's Trousers",
            'image_url' => 'images/nike_trouser',
            'stock' => 12,
            'price' => 5599,
        ]);
        \App\Models\Product::create([
            'title' => 'Macbook Pro',
            'description' => "Apple 2022 MacBook Air M2 Chip (13-inch, 8GB RAM, 256GB SSD Storage) (QWERTY English) Space Gray (Renewed Premium)",
            'image_url' => 'images/macbook',
            'stock' => 6,
            'price' => 90900,
        ]);
        \App\Models\Product::create([
            'title' => 'Dell Laptop',
            'description' => "Dell Inspiron 15 3000 Series 3520 Laptop, 15.6\" FHD Touchscreen, Intel Core i5-1135G7, 32GB DDR4 RAM, Webcam, HDMI, 1TB PCIe M.2 SSD, Wi-Fi, Portable, Windows 11 Home, Black",
            'image_url' => 'images/dell_laptop',
            'stock' => 7,
            'price' => 65500,
        ]);
        \App\Models\Product::create([
            'title' => 'iPhone 15',
            'description' => 'Apple iPhone 15 (128 GB) - Blue',
            'image_url' => 'images/iphone',
            'stock' => 3,
            'price' => 95100,
        ]);
        \App\Models\Product::create([
            'title' => 'Samsung S23',
            'description' => 'SAMSUNG Galaxy S23 Cell Phone, Factory Unlocked Android Smartphone, 128GB, 50MP Camera, Night Mode, Long Battery Life, Adaptive Display, US Version, 2023, Phantom Black',
            'image_url' => 'images/samsung_s23',
            'stock' => 7,
            'price' => 70100,
        ]);
    }
}
