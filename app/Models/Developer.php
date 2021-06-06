<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Developer extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'phone_number',
        'address',
        'avatar',
        'email',
    ];

    /**
     * Accessors when we retrieve it
     */
    public function getAvatarAttribute($value) {
        if(!empty($value)){
            $value = Storage::url($value);
        }
        return $value;
    }
}
