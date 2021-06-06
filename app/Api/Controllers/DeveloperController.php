<?php

namespace App\Api\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\Developer\StoreRequest;
use App\Http\Requests\Developer\UpdateRequest;
use DevRepo;

//Model
use App\Models\Developer;

class DeveloperController extends Controller
{    
    protected $repo;
    
    public function __construct(DevRepo $repo)
    {
        $this->repo = $repo;
    }

    public function show(Developer $developer)
    {
        return $developer->load($this->repo->eager_load);
    }

    public function index(Request $request)
    {
        return $this->repo->all()->toArray();
    }

    public function store(StoreRequest $request)
    {             
        return $this->repo->store($request->validated());
    }

    public function update(UpdateRequest $request, Developer $developer)
    {   
        $validated = $request->validated();
        $validated['id'] = $developer->id;

        return $this->repo->put($validated);
    }

    public function destroy(Developer $developer)
    {       
        return $this->repo->remove($developer->id);
    }
}
