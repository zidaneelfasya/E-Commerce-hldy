<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class CartsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        foreach (range(1, 10) as $index) {
            \DB::table('carts')->insert([
                'quantity' => $faker->numberBetween(1, 5),
                'user_id' => $faker->numberBetween(1, 10),
                'item_id' => $faker->numberBetween(1, 10),
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
    }
}
