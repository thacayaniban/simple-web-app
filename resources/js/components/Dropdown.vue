<template>
     <div class="relative" >
          
          <div v-on:click="showMenu = !showMenu">
               <slot name="trigger"></slot>
          </div>

          <transition name="ease"
                    enter-class="transition ease-out duration-200"
                    enter-active-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-class="transition ease-in duration-75"
                    leave-active-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95" >
              <div v-show="showMenu" class="absolute z-50 mt-2 w-48 rounded-md shadow-lg origin-top-right right-0" >
                    <div class="rounded-md ring-1 ring-black ring-opacity-5 py-1 bg-white">
                         <slot name="content"></slot>
                    </div>
               </div>
          </transition>
          
     </div>
</template>
 
<script>
     export default {
          data() {
              return {
                showMenu: false
              };
          }
     }
</script>
