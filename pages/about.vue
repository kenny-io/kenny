<template>
  <div class="hero min-h-screen ">
    <div class="flex-col hero-content lg:flex-row-reverse">
      <div class="flex-col hero-content">
        <h1 class="sm:text-7xl text-5xl font-black mb-10 text-primary-content">
          About <span class="text-accent">Kenny</span>
        </h1>
        <p
          class="mb-10 text-primary-content opacity-50 text-base leading-relaxed xl:w-2/4 lg:w-3/4"
        >
          I do developer experience at Netlify and I love working on projects
          that help other software engineers. <br />
          <br />
          Passionate about sharing with the community and supporting the next
          generation of developers, I write about web development concepts and
          best practices, create courses, present workshops and speak at
          conferences.

          <br />
          <br />
          Here are some of the technologies I like to play with:
        </p>

        <div class="group">
          <div class="badge badge-accent badge-outline">ES6</div>
          <div class="badge badge-accent badge-outline">Jamstack</div>
          <div class="badge badge-accent badge-outline">Vue</div>
          <div class="badge badge-accent badge-outline">Nuxt</div>
          <div class="badge badge-accent badge-outline">Serverless</div>
          <div class="badge badge-accent badge-outline">Supabase</div>
          <div class="badge badge-accent badge-outline">Sanity</div>
        </div>
      </div>
      <div class="relative group">
        <div
          class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg "
        ></div>
        <div>
          <img
            src="../static/kenny-2.png"
            class="max-w-xs md:max-w-lg rounded-lg shadow-2xl opacity-95 hover:opacity-80 "
          />
        </div>
      </div>
    </div>
  </div>
</template>
