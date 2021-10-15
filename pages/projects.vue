<template>
  <div class="">
    <section class="text-primary-content">
      <div
        class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
      >
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="mb-5 text-5xl font-bold text-accent">
            Projects
          </h1>
          <p class="leading-relaxed opacity-70">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
            photo booth af fingerstache pitchfork.
          </p>
        </div>
      </div>
    </section>
    <section class="text-primary-content overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-100">
          <div
            v-for="project in projects"
            :key="project.title"
            class="py-8 flex flex-wrap md:flex-nowrap"
          >
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span
                v-if="project.hasSite"
                class="font-normal title-font opacity-70"
                >SITE</span
              >
              <span v-else class="font-normal title-font opacity-70 "
                >NORMAL</span
              >
              <span class="mt-1 opacity-70 text-sm">{{ project.date }}</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium title-font mb-2">
                {{ project.title }}
              </h2>
              <p class="leading-relaxed opacity-70">
                {{ project.description }}
              </p>
              <a class="text-yellow-500 inline-flex items-center mt-4 mr-5"
                >Github
              </a>

              <a
                v-if="project.hasSite"
                class="text-yellow-500 inline-flex items-center mt-4 "
                >Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import AppButton from "~/components/AppButton.vue";
export default {
  components: { AppButton },
  data() {
    return {
      projects: [
        {
          title: "Build a Nuxt App with Tailwind CSS and Sanity",
          description:
            "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over ",
          date: "Sep 20, 2021",
          hasSite: true
        },
        {
          title: "Build a Nuxt App with Tailwind CSS and Sanity",
          description:
            "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over ",
          date: "Sep 20, 2021",
          hasSite: false
        },
        {
          title: "Build a Nuxt App with Tailwind CSS and Sanity",
          description:
            "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over ",
          date: "Sep 20, 2021",
          hasSite: true
        },
        {
          title: "Build a Nuxt App with Tailwind CSS and Sanity",
          description:
            "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over ",
          date: "Sep 20, 2021",
          hasSite: false
        }
      ]
    };
  }
};
</script>
