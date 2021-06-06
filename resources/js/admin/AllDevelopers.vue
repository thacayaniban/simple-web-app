<!-- This example requires Tailwind CSS v2.0+ -->
<template>
	<div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
					  <section class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
					  <header class="flex items-center justify-end">

					    <a href="/developer-add">
					    	<button class="hover:bg-blue-200 hover:text-blue-800 group flex items-center rounded-md bg-blue-100 text-blue-600 text-sm font-medium px-4 py-2 float-right">
						      <svg class="group-hover:text-blue-600 text-blue-500 mr-2" width="12" height="20" fill="currentColor">
						        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"/>
						      </svg>
						      New
						    </button>
						</a>

					  </header>
					  <div class="flex flex-col">
					    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
					          <table class="min-w-full divide-y divide-gray-200">
					            <thead class="bg-gray-50">
					              <tr>
					                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
					                  Name
					                </th>
					                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
					                  Phone Number
					                </th>
					                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
					                  Status
					                </th>
					                <th scope="col" class="relative px-6 py-3">
					                  <span class="sr-only">Edit</span>
					                </th>
					              </tr>
					            </thead>
					            <tbody class="bg-white divide-y divide-gray-200">
					              <tr v-for="developer in developers" :key="developer.email">
					                <td class="px-6 py-4 whitespace-nowrap">
					                  <div class="flex items-center">
					                    <div class="flex-shrink-0 h-10 w-10">
					                      <img class="h-10 w-10 rounded-full" :src="developer.avatar" alt="" />
					                    </div>
					                    <div class="ml-4">
					                      <div class="text-sm font-medium text-gray-900">
					                        {{ developer.first_name }} {{ developer.last_name }}
					                      </div>
					                      <div class="text-sm text-gray-500">
					                        {{ developer.email }}
					                      </div>
					                    </div>
					                  </div>
					                </td>
					                <td class="px-6 py-4 whitespace-nowrap">
					                  <div class="text-sm text-gray-500">{{ developer.phone_number }}</div>
					                </td>
					                <td class="px-6 py-4 whitespace-nowrap">
					                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
					                    Active
					                  </span>
					                </td>
					                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">



					                  <router-link :to="{name: 'Edit Developer', params: { id: developer.id }}" class="px-5 text-indigo-600 hover:text-indigo-900">Edit</router-link>
                    					<button class="text-red-600 hover:text-red-900" @click="deletePost(developer.id)">Delete</button>




					                </td>
					              </tr>
					            </tbody>
					          </table>
					        </div>
					      </div>
					    </div>
					  </div>
					</section>
				</div>
          </div>
      </div>
  </div>
  
</template>

<script>
export default {
        data() {
            return {
                developers: []
            }
        },
        created() {
            this.axios
                .get(process.env.MIX_APP_URL+'/api/developers')
                .then(response => {
                    this.developers = response.data;
                });
        },
        methods: {
            deletePost(id) {
            	if(confirm("Do you really want to delete?")){
            		this.axios
                    .delete(process.env.MIX_APP_URL+`/api/developer/${id}`)
                    .then(response => {
                        let i = this.developers.map(item => item.id).indexOf(id); // find index of your object
                        this.developers.splice(i, 1)
                    });

			                
			   	}

                
            }
        }
    }
</script>