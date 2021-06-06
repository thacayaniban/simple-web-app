<?php
namespace App\Repositories\Eloquents;

use App\Repositories\Contracts\RepositoryInterface;
use App\Models\Developer;
use Session;

class DeveloperRepository extends BaseRepository
{
    protected $model;

    public $eager_load = [ ];
    
    public function __construct(Developer $model)
    {
            $this->model = $model;
    }
    
    public function dynamicQuery($model_query, $data) 
    {
        //SEARCH BASE ON REQUEST (GET) VALUE

        return $model_query;
    }
    
    // public function store(array $data, $file_upload = []){        
    //     $result = $this->create($data);
    //     $record = $this->find($result['id']);
        
    //     if(!$result){
    //         return $this->errorSave('Unable to create developer');
    //     }else{
    //         Session::flash('success', 'Create Developer success'); 
    //     }
    //     return $record;
    // }

    public function store(array $data)
    {
        $developer_data = [
            'first_name' => $data['first_name']
            ,'last_name' => $data['last_name']
            ,'email' => $data['email']
            ,'phone_number' => $data['phone_number']
            ,'address' => $data['address']
        ];

        $result = $this->create($developer_data);

        if($result)
        {
            //If have file
            if (!empty($data['avatar']))
            {
                $parent_folder = "developer/".$result->id."";
                $path = $this->saveFile($parent_folder, $data['avatar']);
                //$thumb_path = $this->createThumbnail($parent_folder, $path);

                $this->update(['avatar'=>$path], $result->id);
            }
        }

        return $result;
    }

    public function put(array $data, $file_upload = []){     
        $developer_data = [
            'first_name' => $data['first_name']
            ,'last_name' => $data['last_name']
            ,'email' => $data['email']
            ,'phone_number' => $data['phone_number']
            ,'address' => $data['address']
        ];

        $result = $this->update($developer_data, $data['id']);
        $record = $this->find($data['id']);
        
        if($result)
        {
            //If have file
            if (!empty($data['avatar']))
            {
                $parent_folder = "developer/".$data['id']."";
                $path = $this->saveFile($parent_folder, $data['avatar']);
                //$thumb_path = $this->createThumbnail($parent_folder, $path);

                $this->update(['avatar'=>$path], $data['id']);
            }
        }

        return $record;
    }

    public function remove($id)
    {
        $result = $this->delete($id);

        if($result)
        {   
            $this->deleteDirectory('developer/'. $id);
        }

        return $this->success();

    }
}