<template>
  <div class="hero min-h-screen text-primary-content">
    <div class="flex-col hero-content lg:flex-row-reverse">
      <div class="flex-col hero-content">
        <h1 class="sm:text-7xl text-5xl font-black mb-10">
          DevRel
          <span class="text-accent"
            >Mentoring for aspiring developer advocates</span
          >
        </h1>
        <p
          class="mb-10  opacity-70 text-base leading-relaxed xl:w-2/4 lg:w-3/4"
        >
          I'm a Senior Developer Experience Engineer at Netlify and I love
          working on projects that help other software engineers. <br />
          <br />
          Passionate about sharing with the community and supporting the next
          generation of developers, I write about web development concepts and
          best practices, create courses, present workshops and speak at
          conferences.
        </p>
      </div>
      <div class="relative group">
        <div
          class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg "
        ></div>
        <div>
          <nuxt-img
            src="/learn.jpeg"
            format="webp"
            class="max-w-xs md:max-w-lg rounded-lg shadow-2xl opacity-95 hover:opacity-80 "
            sizes="sm:max-w-xs md:100vw lg:800px"
            alt="kenny image posing for a headshot"
            width="350"
            height="450"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "DevRel Mentoring",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Helping more developer advocates get started on DevRel"
      }
    ]
  }
};
</script>
