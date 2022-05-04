<template>
  <div class="hero min-h-screen text-primary-content">
    <div class="flex-col hero-content lg:flex-row-reverse">
      <div class="flex-col hero-content">
        <h1 class="sm:text-7xl text-5xl font-black mb-10">
          About <span class="text-accent">Kenny</span>
        </h1>
        <p
          class="mb-10  opacity-70 text-base leading-relaxed xl:w-2/4 lg:w-3/4"
        >
          Okay here are couple more things about me:
          <br />
          <br />
          In addition to my work, I have a
          <a
            href="https://www.youtube.com/c/EkeneEze"
            class="tex-primary-content underline"
            >YouTube Channel
          </a>
          where I share my thoughts and experiences on building the modern web
          with the Jamstack. I also run a DevRel mentorship program where I help
          other intending developer advocates get started with DevRel. When I'm
          not doing either of those things, you'll probably find me traveling or
          hanging out with friends and family.

          <br />
          <br />
          Oh about working and doing web things, here are some of the
          technologies I like to play with:
        </p>

        <div class="group">
          <div
            v-for="tech in techs"
            :key="tech"
            class="badge badge-primary badge-outline px-4 py-4 text-black m-1"
          >
            {{ tech }}
          </div>
        </div>
      </div>
      <div class="relative group">
        <div
          class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg "
        ></div>
        <div>
          <nuxt-img
            src="/kenny-about.jpeg"
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
    title: "About Ekene Eze",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "All you need to know about Ekene"
      }
    ]
  },
  data() {
    return {
      techs: ["ES6", "Jamstack", "Vue", "Nuxt", "Serverless", "Supabase"]
    };
  }
};
</script>
