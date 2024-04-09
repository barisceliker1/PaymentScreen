<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use App\Models\User;

class cardInformation extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable= [
        'numberCard',
        'sinceDate',
        'tillDate',
        'CVV',
        'user_id'
    ];
    public function user()
{
    return $this->belongsTo(User::class);
}
    public function cardinformations(): MorphTo
    {
        return $this->morphTo();
    }
}
