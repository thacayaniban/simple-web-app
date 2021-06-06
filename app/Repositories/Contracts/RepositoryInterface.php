<?php
namespace App\Repositories\Contracts;

interface RepositoryInterface
{
    public function setSuccessCode();

    public function dynamicQuery($model_query, $data);

    public function all(array $data = [], array $eager_load = [], $columns = array('*'));

    public function paginate(array $data = [], array $eager_load = [], $per_page = null, $columns = array('*'));

    public function create(array $data);

    public function update(array $data, $id);

    public function delete($id);

    public function find($id, array $eager_load, $columns = array('*'));

    public function findBy(array $array, array $eager_load = [],$columns = array('*'));

    public function responseJSON($array);

    public function success($message = 'Success');

    public function errorSave($message = 'Error saving the data!');
   
    public function errorDelete($message = 'Error deleting the data!');
}