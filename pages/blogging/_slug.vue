<template>
  <section data-theme="kennylight">
    <div class="container px-5 py-24 mx-auto">
      <div
        class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto overflow-auto"
      >
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
  }
};
</script>
