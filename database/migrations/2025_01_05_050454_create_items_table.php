<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('price', 10, 2);
            $table->decimal('disc_price', 10, 2)->nullable();
            $table->text('description');
            $table->integer('stock');
            $table->enum('condition', ['ready', 'habis', 'pre-order'])->default('ready');
            $table->foreignId('category_id')->constrained('categories');
            $table->foreignId('user_id')->constrained('users'); // Relasi dengan users
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('items');
    }
};
