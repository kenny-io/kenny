<template>
  <header class=" shadow-lg text-primary-content px-5 py-10 overflow-hidden">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <nuxt-link
        to="/"
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <Logo />
      </nuxt-link>
      <nav
        class="md:ml-auto md:mr-auto flex items-center text-base justify-center"
      >
        <div class="group" v-for="item in items" :key="item">
          <nuxt-link
            :to="`/${item}`"
            class="btn-sm leading-6 font-normal text-base leading-6 cursor-pointer"
          >
            {{ item }}
          </nuxt-link>
          <div class="opacity-0 group-hover:opacity-100 flex justify-center">
            <div class="w-16 h-1 rounded-full bg-primary inline-flex "></div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      items: ["About", "Speaking", "Writing", "Projects", "Uses"]
    };
  }
};
</script>
