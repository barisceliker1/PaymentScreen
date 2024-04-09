<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\cardInformation;
class cardController extends Controller
{
    //
    public function show(): Response
    {
        $comment = cardInformation::find(1);

$commentable = $comment->cardinformations;
dd($commentable);
        return Inertia::render('Card');
    }
}
