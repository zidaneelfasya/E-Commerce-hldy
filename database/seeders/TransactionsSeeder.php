<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class TransactionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();
        foreach (range(1, 10) as $index) {
            \DB::table('transactions')->insert([
                'date' => $faker->date(),
                'status' => $faker->randomElement(['Pending', 'Completed', 'Cancelled']),
                'cart_id' => $faker->numberBetween(1, 10),
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
    }
}
