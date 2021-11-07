<template>
  <div role="main" class="hero min-h-screen ">
    <div class="flex-col hero-content items-center lg:flex-row-reverse">
      <div class="relative group">
        <div
          class="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-400 rounded-full "
        ></div>
        <div>
          <nuxt-img
            src="/ekky.jpeg"
            format="webp"
            class="max-w-xs md:max-w-lg rounded-full shadow-2xl opacity-95 hover:opacity-80"
            sizes="sm:100vw md:100vw lg:800px"
            alt="kenny's headshot"
            width="350"
            height="450"
          />
        </div>
      </div>
      <div class="text-center">
        <h1
          class="sm:text-7xl text-5xl mb-8 font-black leading-20 text-primary-content"
        >
          Hey,<span class="text-accent"> I'm Kenny!</span>
        </h1>
        <p
          class="mb-10 mt-3 text-primary-content opacity-70 text-base leading-relaxed  "
        >
          I do developer experience at Netlify and I love working on projects
          that help other software engineers. Passionate about sharing with the
          community and supporting the next generation of developers, I write
          about web development concepts and best practices, create courses,
          present workshops and speak at conferences.
        </p>
        <div role="list" class="group">
          <a
            role="listitem"
            class="btn text-primary hover:bg-accent hover:text-secondary"
            href="https://twitter.com/kenny_io"
            >Twitter
          </a>
          <a
            role="listitem"
            class="btn text-primary hover:bg-accent hover:text-secondary"
            href="https://www.youtube.com/c/EkeneEze"
            >YouTube
          </a>
          <a
            role="listitem"
            class="btn text-primary hover:bg-accent hover:text-secondary"
            href="https://polywork.com/kenny_io"
            >Polywork
          </a>
          <a
            role="listitem"
            class="btn text-primary hover:bg-accent hover:text-secondary mt-2"
            href="https://github.com/kenny-io"
            >Github
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
