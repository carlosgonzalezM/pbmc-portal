<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request){
        $data = $request->validated();

        //revisar el password

        if(!Auth::attempt($data)){
            return response([
                'errors' => ['el email o el password son incorrectos']
            ], 422);
        }

        //autenticar al usuario

        $user = Auth::user();
        return [
            'token' => $user->createToken('token')->plainTextToken,
            'user' => $user
        ];

    }

    public function signup(SignupRequest $request){
         //validar el request
         $data = $request->validated();

         //crear el usuario

         $user = User::create([
             'name' => $data['name'],
             'user_name' => $data['user_name'],
             'email' => $data['email'],
             'password' => bcrypt($data['password'])
         ]);

         //retornar una respuesta

         return [
             'token' => $user->createToken('token')->plainTextToken,
             'user' => $user
         ];
    }

    public function logout(Request $request){
        $user = $request->user();
        $user->currentAccessToken()->delete();

        return [
            'user' => null
        ];
    }
}
