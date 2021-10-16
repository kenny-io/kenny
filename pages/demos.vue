<template>
  <div class="">
    <section class="text-primary-content">
      <div
        class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
      >
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="mb-5 text-5xl font-bold text-accent">
            Demos
          </h1>
          <p class="leading-relaxed opacity-70">
            When I write content or make video tutorials, I often do it along
            with a project to better demonstrate what I'm teaching. I strongly
            believe that a good way to inform is not just to tell but also to
            show. So for every concept I teach, I build a project to demonstrate
            said concept. I've listed some of these demos here for anyone keen
            to look.
          </p>
        </div>
      </div>
    </section>
    <section class="text-primary-content overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-100">
          <div
            v-for="demo in demos.demos"
            :key="demo.title"
            class="py-8 flex flex-wrap md:flex-nowrap"
          >
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span
                v-if="demo.hasSite"
                class="font-normal title-font opacity-70"
                >SITE</span
              >
              <span v-else class="font-normal title-font opacity-70 "
                >NORMAL</span
              >
              <span class="mt-1 opacity-70 text-sm">{{ demo.date }}</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium title-font mb-2">
                {{ demo.title }}
              </h2>
              <p class="leading-relaxed opacity-70">
                {{ demo.description }}
              </p>
              <div
                role="list"
                class="text-accent-focus inline-flex items-center space-x-4 mt-5"
              >
                <a :href="demo.github" role="listitem">
                  Github
                </a>

                <a v-if="demo.hasSite" role="listitem" :href="demo.site"
                  >Live Demo
                </a>
                <a v-if="demo.hasPost" role="listitem" :href="demo.post"
                  >Post
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  head: {
    title: "Project page",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          'Ekene Eze"s popular projects and demos on Github mostly hosted on Netlify'
      }
    ]
  },
  data() {
    return {
      demos: ""
    };
  },
  async fetch() {
    this.demos = await this.$content("demos")
      .sortBy("date", "desc")
      .fetch();
  }
};
</script>
