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
          I'm a Developer Advocate with over 5 years experience, working in
          different companies and leading DevRel teams in others. I love
          creating content and sharing my knowledge with the community in forms
          of blog posts, video tutorials, livestreams, podcasts and speaking at
          conferences. If you're interested in working with me, in any capacity,
          do reach out via any of the links below 👇🏽
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
            href="https://www.linkedin.com/in/ekeneeze/"
            >Linkedin
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
