<template>
  <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
               
                  <div class="md:grid md:grid-cols-3 md:gap-6">
                    
                    <div class="mt-5 md:mt-0 md:col-span-3">
                      <form>
                        <div class="shadow sm:rounded-md sm:overflow-hidden">
                          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">

                            <div class="grid grid-cols-6 gap-6">

                              <div class="col-span-6 sm:col-span-6">
                                <label class="block text-sm font-medium text-gray-700">
                                  Photo
                                </label>
                                <div class="mt-1 flex items-center">
                                  <span class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                    <svg v-show="!form.avatar" class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>

                                    <img class="img-circle" :src="getProfilePhoto()" v-model="form.avatar_blob" alt="User Avatar">
                                  </span>
                                  <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <input type="file" @change="updateProfile" name="avatar" class="form-input">
                                  </button>
                                </div>
                              </div>




                              <div class="col-span-6 sm:col-span-3">
                                <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
                                <input type="text" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" id="first_name" placeholder="First Name" v-model="form.first_name">
                                <div class="mt-3 list-disc list-inside text-sm text-red-600" v-if="form.errors.has('first_name')" v-html="form.errors.get('first_name')" />
                              </div>

                              <div class="col-span-6 sm:col-span-3">
                                <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                                <input type="text" id="last_name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Last Name" v-model="form.last_name"/>
                                <div class="mt-3 list-disc list-inside text-sm text-red-600" v-if="form.errors.has('last_name')" v-html="form.errors.get('last_name')" />
                              </div>

                              <div class="col-span-6 sm:col-span-3">
                                <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
                                <input type="text" id="email" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Email" v-model="form.email"/>
                                <div class="mt-3 list-disc list-inside text-sm text-red-600" v-if="form.errors.has('email')" v-html="form.errors.get('email')" />
                              </div>

                              <div class="col-span-6 sm:col-span-3">
                                <label for="phone_number" class="block text-sm font-medium text-gray-700">Phone number</label>
                                <input type="text" id="phone_number" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Phone Number" v-model="form.phone_number"/>
                                <div class="mt-3 list-disc list-inside text-sm text-red-600" v-if="form.errors.has('phone_number')" v-html="form.errors.get('phone_number')" />
                              </div>

                              <div class="col-span-6">
                                <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                                <input type="text" id="address" autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" placeholder="Address" v-model="form.address"/>
                                <div class="mt-3 list-disc list-inside text-sm text-red-600" v-if="form.errors.has('address')" v-html="form.errors.get('address')" />
                              </div>

                            </div>

                          </div>
                          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button @click.prevent="updateInfo" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        data(){
            return {
                 form: new Form({
                    first_name:'',
                    last_name : '',
                    email: '',
                    phone_number: '',
                    address: '',
                    avatar: '',
                    avatar_blob: '',
                })
            }
        },
        methods:{

            addDeveloper() {
                this.axios
                    .post(process.env.MIX_APP_URL+'/api/developer', this.developer)
                    .then(response => (
                        this.$router.push({name: 'home'})
                        // console.log(response.data)
                    ))
                    .catch(error => console.log(error))
                    .finally(() => this.loading = false)
            },

            getProfilePhoto(){
                let avatar = (this.form.avatar_blob.length > 200) ? this.form.avatar_blob : "img/profile/"+ this.form.avatar_blob ;
                return avatar;
            },

            updateInfo(){
                this.form.post('api/developer')
                .then(()=>{
                  this.$router.push({name: 'All Developers'})
                })
                .catch(() => {
                });
            },
            updateProfile(e){
                let file = e.target.files[0];
                this.form.avatar = file;
                let reader = new FileReader();

                let limit = 1024 * 1024 * 2;
                if(file['size'] > limit){
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: 'You are uploading a large file',
                    })
                    return false;
                }

                reader.onloadend = (file) => {
                    this.form.avatar_blob = reader.result;
                }
                
                reader.readAsDataURL(file);
            }
        },
    }
</script>