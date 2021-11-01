<template>
  <section data-theme="kennylight">
    <div class="container px-5 py-24 mx-auto">
      <div
        role="article"
        class="lg:w-2/3 sm:flex-row sm:items-center items-start mx-auto overflow-auto"
      >
        <p class="mb-10 text-2xl">{{ formatDate(post.date) }}</p>
        <br />
        <h1 class="font-bold text-5xl mb-20">{{ post.title }}</h1>

        <nuxt-content
          class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl"
          :document="post"
        ></nuxt-content>
      </div>
    </div>
  </section>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta.js";
export default {
  head() {
    return {
      title: this.post.title,

      meta: [
        ...this.meta,
        {
          hid: "description",
          name: "description",
          content: this.post.description
        }
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://kenny.engineer/blogging/${this.$route.params.slug}`
        }
      ]
    };
  },
  async asyncData({ $content, params }) {
    const post = await $content("blog", params.slug).fetch();
    return { post };
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
        title: this.post.title,
        description: this.post.description,
        url: `https://kenny.engineer/blogging/${this.$route.params.slug}`,
        mainImage: this.post.image
      };
      return getSiteMeta(metaData);
    }
  }
};
</script>
