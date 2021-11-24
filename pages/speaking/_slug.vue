<template>
  <section class="text-primary-content body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <nuxt-img
          alt="kenny-speaking-at-a-conference"
          width="800"
          height="700"
          class="lg:w-1/2 w-1/2 lg:h-1/2 h-1/2 object-cover object-center rounded"
          src="/speaking/speaking-avatar.png"
        />
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font opacity-70 tracking-widest">
            {{ talk.conference }}
          </h2>
          <h1 class="text-3xl title-font opacity-70 font-medium mb-1">
            {{ talk.title }}
          </h1>
          <div class="flex mb-4 text-base leading-relaxed">
            <span class="flex ml-3 pl-3 py-2 opacity-70 border-l-2 space-x-4">
              <p>
                {{ formatDate(talk.date) }}
              </p>

              <span>
                <div
                  class="badge badge-accent badge-outline mr-3"
                  v-for="category in talk.category"
                  :key="category"
                >
                  {{ category.name }}
                </div>
              </span>
            </span>
          </div>
          <p class="leading-relaxed opacity-70 ">
            {{ talk.description }}
          </p>
          <div
            class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"
          ></div>
          <div class="flex">
            <div class="flex space-x-4">
              <a
                :href="talk.video"
                class="btn text-accent-content bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-400"
                v-if="talk.ready === true"
                target="_blank"
                rel="noopener"
              >
                Watch
              </a>
              <a
                :href="talk.video"
                target="_blank"
                class="btn text-accent-content bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-400"
                v-else
                disabled
              >
                Video coming soon
              </a>
              <a
                class="btn text-accent-content bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-400"
                :href="talk.slides"
                v-if="talk.slides"
              >
                See Slides
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import getSiteMeta from "~/utils/getSiteMeta.js";
export default {
  head() {
    return {
      title: this.talk.title,

      meta: [
        ...this.meta,
        {
          hid: "description",
          name: "description",
          content: this.talk.description
        }
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://kenny.engineer/speaking/${this.$route.params.slug}`
        }
      ]
    };
  },
  async asyncData({ $content, params }) {
    const talk = await $content("talks", params.slug).fetch();

    return { talk };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: "article",
        title: this.talk.title,
        description: this.talk.description,
        url: `https://kenny.engineer/speaking/${this.$route.params.slug}`,
        mainImage: this.talk.image
      };
      return getSiteMeta(metaData);
    }
  }
};
</script>
