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
        Schema::create('card_information', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('numberCard');
            $table->bigInteger('sinceDate');
            $table->bigInteger('tillDate');
            $table->bigInteger('CVV');
            $table->foreignId('user_id');
            $table->unsignedInteger('available_at')->default(0);
            $table->unsignedInteger('created_at')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('card_information');
    }
};
