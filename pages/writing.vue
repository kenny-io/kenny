<template>
  <div class="parent">
    <section class="text-gray-300 body-font">
      <div
        class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
      >
        <div class="text-center lg:w-2/3 w-full">
          <h1
            class="title-font sm:text-4xl text-3xl mb-10 font-medium text-primary-content"
          >
            Blogging...
          </h1>
          <p class="leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
            photo booth af fingerstache pitchfork.
          </p>
        </div>
      </div>
    </section>
    <section class="text-gray-600 body-font">
      <div
        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src="../static/post-thumbnail.png"
          />
        </div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center text-primary-content"
        >
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium ">
            Build a Nuxt App with Tailwind CSS and Sanity
          </h1>
          <span class="mb-5">
            <div class="badge badge-accent badge-outline">featured</div>
          </span>
          <p class="mb-3 leading-relaxed opacity-50">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <button class="text-accent mb-5">Read more &rarr;</button>
          <div class="flex justify-center">
            <div class="p-1 ">
              <div
                class="p-1 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-400 rounded-full"
              >
                <img
                  src="../static/avatar.png"
                  class="w-14 h-14 rounded-full"
                />
              </div>
            </div>
            <!-- <div class="avatar ">
              <div class="rounded-box w-14 h-14">
                <img src="../static/kenny.png" />
              </div>
            </div> -->

            <div class="author ml-5 mt-3 text-primary-content opacity-50">
              <h2>Ekene Eze</h2>
              <p>Sep 20, 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="posts mx-auto ">
      <div class="text-center lg:w-2/4 w-full">
        <h1
          class="title-font sm:text-4xl text-3xl mb-10 font-medium text-primary-content"
        >
          On this site...
        </h1>
      </div>
      <div class="flex flex-row w-full">
        <div class="grid flex-grow h-auto place-items-center w-1/2">
          <div
            v-for="article in articles"
            :key="article"
            class="card lg:card-side mb-10 border-2 border-yellow-500"
          >
            <div class="card-body text-primary-content">
              <h2 class="card-title ">{{ article.title }}</h2>
              <p>
                {{ article.description }}
              </p>
              <div class="card-actions">
                <button class="text-accent mb-5">Read More &rarr;</button>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="divider divider-vertical">OR</div> -->
        <div
          class="grid flex-grow h-auto card rounded-box place-items-center w-1/2"
        >
          <div class="text-center lg:w-2/4 w-full">
            <h1
              class="title-font sm:text-4xl text-3xl mb-10 font-medium text-primary-content"
            >
              Elsewhere...
            </h1>
          </div>
          <section class="body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
              <div
                v-for="article in articles"
                :key="article"
                class="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto"
              >
                <div
                  class="h-full w-6 absolute inset-0 flex items-center justify-center"
                >
                  <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div
                  class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-primary-focus text-black relative z-10 title-font font-medium text-sm"
                >
                  &#10004;
                </div>
                <div
                  class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
                >
                  <!-- <div
                    class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center"
                  >
                     <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-12 h-12"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      ></path>
                    </svg>
                  </div> -->
                  <div
                    class="flex-grow sm:pl-6 mt-6 sm:mt-0 text-primary-content"
                  >
                    <h2 class="font-medium title-font mb-1 text-xl ">
                      {{ article.title }}
                    </h2>
                    <p class="leading-relaxed opacity-50">
                      {{ article.description }}
                    </p>
                    <button class="text-accent mt-3">Read More &rarr;</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [
        {
          title: "Build a Nuxt App with Tailwind CSS and Sanity",
          description:
            "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over ",
          author: "Ekene Eze",
          data: "Sep 20, 2021",
          image: "https://dummyimage.com/720x600",
          featured: true
        },
        {
          title: "Build a Nuxt App with Tailwind CSS and Sanity",
          description:
            "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over ",
          author: "Ekene Eze",
          data: "Sep 20, 2021",
          image: "https://dummyimage.com/720x600",
          featured: false
        },
        {
          title: "Build a Nuxt App with Tailwind CSS and Sanity",
          description:
            "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over ",
          author: "Ekene Eze",
          data: "Sep 20, 2021",
          image: "https://dummyimage.com/720x600",
          featured: false
        },
        {
          title: "Build a Nuxt App with Tailwind CSS and Sanity",
          description:
            "Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over freegan heirloom neutra air Copper mug try-hard pitchfork pour-over ",
          author: "Ekene Eze",
          data: "Sep 20, 2021",
          image: "https://dummyimage.com/720x600",
          featured: false
        }
      ]
    };
  }
};
</script>
