<template>
  <section data-theme="kennylight" class="text-primary-content body-font">
    <div
      class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
    >
      <div class="text-center lg:w-2/3 w-full">
        <h1 class="mb-5 text-5xl font-bold text-accent">
          Uses
        </h1>
        <nuxt-content
          class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl"
          :document="page"
        ></nuxt-content>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head: {
    title: "Ekene Eze | Uses",
    meta: [
      {
        hid: "description",
        name: "uses",
        content: "A list of tools I use daily for work and productivity"
      }
    ]
  },
  async asyncData({ $content }) {
    const page = await $content("uses").fetch();
    return { page };
  }
};
</script>
