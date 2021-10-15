<template>
  <section data-theme="kennylight">
    <div class="container px-5 py-24 mx-auto">
      <div
        class="lg:w-2/3 sm:flex-row sm:items-center items-start mx-auto overflow-auto"
      >
        <p class="mb-10 text-2xl">{{ formatDate(post.date) }}</p>
        <h1 class="font-bold text-5xl mb-10">{{ post.title }}</h1>

        <nuxt-content
          class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl"
          :document="post"
        ></nuxt-content>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content("blog", params.slug).fetch();
    return { post };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  }
};
</script>
