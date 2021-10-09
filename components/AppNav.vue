<template>
  <!-- <div class="navbar shadow-lg text-primary-content sticky top-0 px-5 py-16">
    <div class="px-2 mx-2 navbar-start">
      <span class="">
        <nuxt-link to="/">
          <Logo />
        </nuxt-link>
      </span>
    </div>
    <div class="hidden px-2 mx-2 navbar-center lg:flex">
      <div class="flex items-stretch">
        <div class="group" v-for="item in items" :key="item">
          <a
            class="leading-6 font-normal text-base leading-6 btn-sm cursor-pointer"
          >
            {{ item }}
          </a>
          <div class="opacity-0 group-hover:opacity-100 flex justify-center">
            <div class="w-20 h-1 rounded-full bg-yellow-500 inline-flex "></div>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar-end">
      <button class="btn btn-accent rounded-full">
        Schedule
      </button>
    </div>
  </div> -->

  <header class=" shadow-lg text-primary-content px-5 py-10 ">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <a
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <Logo />
      </a>
      <nav
        class="md:ml-auto md:mr-auto flex items-center text-base justify-center"
      >
        <div class="group" v-for="item in items" :key="item">
          <a
            class="btn-sm leading-6 font-normal text-base leading-6 cursor-pointer"
          >
            {{ item }}
          </a>
          <div class="opacity-0 group-hover:opacity-100 flex justify-center">
            <div class="w-16 h-1 rounded-full bg-primary inline-flex "></div>
          </div>
        </div>
      </nav>
      <!-- <button class="btn btn-accent rounded-full">
        Schedule
      </button> -->
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: ["About", "Speaking", "Writing", "Projects", "Uses", "Learn"]
    };
  }
};
</script>
