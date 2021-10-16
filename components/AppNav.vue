<template>
  <nav class="text-primary-content overflow-hidden bg-background">
    <div class="max-w-6xl mx-auto px-8 py-8">
      <div class="justify-between flex">
        <!-- use SVG Logo from assets directory -->
        <div>
          <nuxt-link
            tag="img"
            width="135"
            height="42"
            alt="Kenny logo"
            :src="require('~/assets/logo.svg')"
            to="/"
            class="flex cursor-pointer"
          >
          </nuxt-link>
        </div>

        <!-- Primary nav -->
        <div>
          <div
            class="hidden md:flex items-center text-base justify-center py-2"
          >
            <div class="group" v-for="item in items" :key="item">
              <nuxt-link
                :to="`/${item}`"
                class="btn-sm hover:opacity-70 opacity-100 leading-6 font-normal text-base leading-6 cursor-pointer"
              >
                {{ item }}
              </nuxt-link>
              <div
                class="opacity-0 group-hover:opacity-100 flex justify-center"
              >
                <div
                  class="opacity-0 group-hover:opacity-100 flex justify-center w-16 h-1 rounded-full bg-primary inline-flex "
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Secondary nav -->
        <div class="flex space-x-4">
          <a
            class="hidden md:flex btn text-accent-content bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-400"
            href="https://www.buymeacoffee.com/ekene"
          >
            Buy me a coffee
          </a>

          <div class="hidden md:flex mt-3">
            <!-- <p class="invisible md:visible">🌚</p> -->
            <div class="inline-block w-10 mr-2 ml-2">
              <span
                data-toggle-theme="kennylight"
                data-act-class="pl-4"
                class="border rounded-full border-accent flex items-center cursor-pointer w-10 transition-all duration-300 ease-in-out pl-0"
              >
                <span class="rounded-full w-3 h-3 m-1 bg-accent"> </span>
              </span>
            </div>
            <!-- <p class="invisible md:visible">🌞</p> -->
          </div>

          <!-- mobile nav -->
          <div
            @click="toggleMobileDrawer()"
            class="md:hidden flex items-center"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.1" cx="24" cy="24" r="23.5" stroke="white" />
              <rect
                x="18.667"
                y="23.3334"
                width="10.6667"
                height="1.33333"
                rx="0.666667"
                fill="white"
              />
              <g opacity="0.5">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.3337 19.3334C18.9655 19.3334 18.667 19.6319 18.667 20C18.667 20.3682 18.9655 20.6667 19.3337 20.6667H23.3337C23.7018 20.6667 24.0003 20.3682 24.0003 20C24.0003 19.6319 23.7018 19.3334 23.3337 19.3334H19.3337ZM24.667 27.3334C24.2988 27.3334 24.0003 27.6319 24.0003 28C24.0003 28.3682 24.2988 28.6667 24.667 28.6667H28.667C29.0352 28.6667 29.3337 28.3682 29.3337 28C29.3337 27.6319 29.0352 27.3334 28.667 27.3334H24.667Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showMobileDrawer" class="md:hidden rounded-lg drawer-end h-auto">
      <div class="drawer-side">
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          <li class="group" v-for="item in items" :key="item">
            <a :href="`/${item}`">{{ item }}</a>
            <div class="opacity-0 group-hover:opacity-100 ">
              <div class="w-2/4 h-1 rounded-full bg-primary "></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: ["About", "Speaking", "Blogging", "Demos", "Uses"],
      showMobileDrawer: false
    };
  },
  methods: {
    toggleMobileDrawer() {
      console.log("toggleMobileDrawer");
      this.showMobileDrawer = !this.showMobileDrawer;
    }
  }
};
</script>
