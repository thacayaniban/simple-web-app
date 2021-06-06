<?php

namespace App\Http\Requests\Developer;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "first_name" => "required|string|max:100"
            ,"last_name" => "required|string|max:100"
            ,"phone_number" => "required|string|max:100"
            ,"email" => "required|string|email|max:100|unique:developers,email,".$this->developer->id
            ,"address" => "required|string|max:200"
            ,"avatar" => "nullable|file|image|mimes:jpg,jpeg,png"
        ];
    }
}
