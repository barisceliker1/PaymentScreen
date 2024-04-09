<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;
use App\Models\cardInformation;
use Carbon\Carbon;
class ProfileController extends Controller
{
    public function cardShow(){
    $getone = User::find(1);
    $result = $getone->cardinformation;
    return Inertia::render('Dashboard',['result'=>$result]);

    }
    public function createApi(Request $request){
        $validated = $request->validate([
            'card' => 'required|digits_between:16,16',
            'cvv' =>  'required|min:3|digits_between:3,3',
            'sinceCard' =>  'required|min:2|digits_between:2,2',
            'tillCard' =>  'required|min:2|digits_between:2,2',
            'checkbox' =>'accepted'
        ]);

      $userId=  Auth::user()->id;
    $card = new cardInformation;


    $card->numberCard=intval($request->card);
    $card->sinceDate=intval($request->sinceCard);
    $card->tillDate=intval($request->tillCard);
    $card->CVV=intval($request->cvv);
    $card->user_id=$userId;
    $card->save();
    }
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
