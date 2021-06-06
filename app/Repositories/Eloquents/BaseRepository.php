<?php
namespace App\Repositories\Eloquents;

use App\Repositories\Contracts\RepositoryInterface;
use Illuminate\Support\Facades\Storage;
use Image;
use URL;
use DateTime;
use Log;

//HELPER
use App\Helpers\ApiLogs;

abstract class BaseRepository implements RepositoryInterface
{
    /**
     * Default Status code to 1 (fail)
     *
     * @var int
     */
    protected $statusCode = 1;

    /**
     * Set HTTP status code
     *
     *@param int $statusCode
     */
    public function setSuccessCode() 
    {
        return $this->statusCode = 0;
    }

    /**
     * Response Success
     *
     * @param $data
     * @return mixed
     */
    public function storeLog($data, $code = "success") 
    {
        $data = $this->NullToEmpty($data);
        ApiLogs::store(200,$code);
        return $data;
    }

    /**
     * Response
     * This method return the final response output
     *
     * @param $message
     * @return mixed
     */
    public function responseJSON($message) {
        return array('code' => $this->statusCode,'message' => $message);
    }

    /**
     * Response Success
     *
     * @param $message
     * @return mixed
     */
    public function success($message = 'Success') 
    {
        $this->setSuccessCode();
        return $this->responseJSON($message);
    }

    /**
     * Generates a response with code 1 and a given message.
     *
     * @param $message
     * @return mixed
     */
    public function errorEmptyData($message = 'Empty to save data') 
    {
        return $this->responseJSON($message);
    }

    /**
     * Generates a response with code 1 and a given message.
     *
     * @param $message
     * @return mixed
     */
    public function errorSave($message = 'Error saving the data!') 
    {
        return $this->responseJSON($message);
    }

    /**
     * Generates a response with code 1 and a given message.
     *
     * @param $message
     * @return mixed
     */
    public function errorDelete($message = 'Error deleting the data!') 
    {
        return $this->responseJSON($message);
    }

        /**
     * Generates a response with code 1 and a given message.
     *
     * @param $message
     * @return mixed
     */
    public function errorUpdate($message = 'Error updating the data!') 
    {
        return $this->responseJSON($message);
    }

    /**
     * Generates a response with code 1 and a given message.
     *
     * @param $message
     * @return mixed
     */
    public function errorDynamic($message = 'Error') 
    {
        return $this->responseJSON($message);
    }

    /**
     * @param array $data
     * @param array $eager_load
     * @param array $columns
     * @return mixed
     */
    public function all(array $data = [], array $eager_load = [], $columns = array('*')) 
    {
        $model_query = $this->model::query();
        $model_query->select($columns);

        return $this->dynamicQuery($model_query, $data)->with($eager_load)->get();
    }

    /**
     * @param array $data
     * @param array $eager_load
     * @param integer $per_page
     * @param array $columns
     * @return mixed
     */
    public function paginate(array $data = [], array $eager_load = [], $per_page = null, $columns = array('*')) 
    {
        $model_query = $this->model::query();
        $model_query->select($columns);
        
        return $this->dynamicQuery($model_query, $data)->with($eager_load)->paginate(!empty($per_page) ? $per_page:SettingHelper::getPerPage());
    }

    /**
     * @param array $data
     * @return mixed
     */
    public function create(array $data) {
        return $this->model->create($data);
    }

    /**
     * @param array $data
     * @param $id
     * @param string $attribute
     * @return mixed
     */
    public function update(array $data, $id, $attribute = "id") 
    {
        return ($this->model->where($attribute, $id)->first())->update($data);
    }

    /**
     * @param $id
     * @param string $parent_folder
     * @return mixed
     */
    public function delete($id, $attribute = "id") 
    {
        $result = ($this->model->where($attribute, $id))->delete();

        if(!$result)
        {
            return $this->errorDelete('Unable to delete');
        }

        return $result;
    }

    public function deleteFile($filePath)
    {
        return Storage::delete($filePath);
    }

    public function deleteDirectory($directory)
    {
        return Storage::deleteDirectory($directory);
    }

    public function saveFile($parent_folder, $file) 
    {
        return $file->store($parent_folder);
    }

    /**
     * @param $id
     * @param array $eager_load
     * @param array $columns
     * @return mixed
     */
    public function find($id, array $eager_load = [], $columns = array('*')) {
        return $this->model->select($columns)->with($eager_load)->find($id);
    }

    /**
     * @param $data
     * @param array $eager_load
     * @param array $columns
     * @return mixed
     */
    public function findBy(array $data, array $eager_load = [], $columns = array('*')) {
        return $this->model->select($columns)->where($data)->with($eager_load)->first();
    }

    /**
     * @param $data
     * @param array $eager_load
     * @param array $columns
     * @return mixed
     */
    public function findAllBy(array $data, array $eager_load = [], $columns = array('*')) {
        return $this->model->select($columns)->where($data)->with($eager_load)->get();
    }

    /**
     * @param $where
     * @param array $columns
     * @param $or
     * @return mixed
     */
    public function findWhere($where, $columns = array('*'), $or = false)
    {
        $model = $this->model;
        foreach ($where as $field => $value) {
            if ($value instanceof \Closure) {
                $model = (!$or)
                    ? $model->where($value)
                    : $model->orWhere($value);
            } elseif (is_array($value)) {
                if (count($value) === 3) {
                    list($field, $operator, $search) = $value;
                    $model = (!$or)
                        ? $model->where($field, $operator, $search)
                        : $model->orWhere($field, $operator, $search);
                } elseif (count($value) === 2) {
                    list($field, $search) = $value;
                    $model = (!$or)
                        ? $model->where($field, '=', $search)
                        : $model->orWhere($field, '=', $search);
                }
            } else {
                $model = (!$or)
                    ? $model->where($field, '=', $value)
                    : $model->orWhere($field, '=', $value);
            }
        }
        return $model->get($columns);
    }

    /**
     * Create Thumbnail From Original
     */
    public function createThumbnail($parent_folder, $path)
    {
        $path_arr = explode("/", $path);
        $file_name = end($path_arr);
        $image = Image::make('storage/'.$parent_folder."/".$file_name)->fit(120, 120)->save('storage/'.$parent_folder."/thumb-".$file_name);
        return $parent_folder."/thumb-".$file_name;
    }

    public static function NullToEmpty($params) {
        
        foreach ($params as $key => $value) {
          
            ////SINGLE DATA////
            if (is_null($value)) {
                $params[$key] = '';
            }

            ////SINGLE DATA WITH OBJECT////
            if (is_object($value)) {
              
                foreach ($value->toArray() as $k => $v) {
                    if (is_null($v)) {
                        $value[$k] = '';
                    }

                    /////DATA IN ARRAY/////
                    if (is_array($v)) {
                        self::NullToEmpty($v);//rolling loop
                    } 

                    /////DATA IN OBJECT/////
                    if (is_object($v)) {
                        self::NullToEmpty($v);//rolling loop
                    } 
                }
            }

            /////COLLECTION DATA/////
            if (is_array($value)) {
                $params[$key] = self::NullToEmpty($value);//rolling loop
            }
        }

        return $params;
    }
}