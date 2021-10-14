<template>
  <section class="dark:bg-gray-900 body-font ">
    <div class="container px-5 py-24 mx-auto">
      <div
        class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto"
      >
        <nuxt-content
          class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto text-primary-content"
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
    console.log(params);
    return { post };
  }
};
</script>

<style>
/* .nuxt-content h2 {
  font-weight: bold;
  font-size: 20px;
  margin: 15px 0 10px 0;
}
.nuxt-content p {
  margin-top: 10px;
} */
</style>
