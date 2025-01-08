<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        foreach (range(1, 10) as $index) {
            \DB::table('items')->insert([
                'name' => $faker->word,
                'price' => $faker->randomFloat(2, 10, 1000),
                'location' => $faker->city,
                'description' => $faker->paragraph,
                'stock' => $faker->numberBetween(1, 100),
                'category_id' => $faker->numberBetween(1, 3),
                'user_id' => 3,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
