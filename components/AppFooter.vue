<template>
  <footer class="text-primary-content h-90  body-font ">
    <div class="container px-5 py-8 mx-auto text-center">
      <h1 class="flex text-lg text-3xl justify-center mb-10">
        Get new contents in your inbox
      </h1>
      <p
        class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-primary-content opacity-50"
      >
        I spend most of my time making contents like blog posts, video tutorials
        and courses, speaking at conference or delivering workshops. If you're
        interested in web development and Jamstack technologies, I'll be happy
        to send you the contents I make if you give me your email address below.
        Otherwise, keep scrolling, no hard feelings :).
      </p>

      <form action="/subscribe" class="flex justify-center mt-10">
        <div class="form-control w-80">
          <div class="relative">
            <input
              type="text"
              placeholder="username@site.com"
              class="w-4/5 pr-16 input input-bordered"
              name="email"
            />
            <app-button class=" w-1/5 absolute top-0 right-0 " :title="`Go`" />
          </div>
        </div>
      </form>

      <div class="p-4 footer footer-center  mt-10 text-lg">
        <div>
          <div class="flex justify-center">
            <div class="w-32 h-1 rounded-full bg-yellow-500 inline-flex "></div>
          </div>
          <p class="opacity-50">
            Ekene Eze © 2021 - Made with
            <a href="https://www.nuxtjs.org">Nuxtjs</a> and
            <a href="https://www.netlify.com"> Netlify</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
