<template>
  <div class="">
    <section class="text-primary-content">
      <div
        class="container mx-auto flex px-5 py-24 items-center justify-center flex-col"
      >
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="mb-5 text-5xl font-bold text-accent">
            Blogging
          </h1>
          <p class="leading-relaxed opacity-70">
            Writing is a huge part of my content delivery approach. It's the
            fastest way I know to quickly share the things I've learnt in the
            course of my work and other activities. I have mostly written
            content that are published on other platforms, but I've also decided
            to write specifically for my blog here.
          </p>
        </div>
      </div>
    </section>
    <section class="text-primary-content">
      <div
        v-for="item in featuredPost"
        :key="item.title"
        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <nuxt-img
            class="object-cover object-center rounded"
            alt="post cover image"
            src="/images/gatsby-v4-on-netlify.png"
            width="550"
            height="450"
          />
          <!-- <pre class="text-white">{{ item.image }}</pre> -->
        </div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center text-primary-content"
        >
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium ">
            {{ item.title }}
          </h1>
          <span class="mb-5">
            <div class="badge badge-accent badge-outline">featured</div>
          </span>
          <p class="mb-3 leading-relaxed opacity-70">
            {{ item.description }}
          </p>
          <nuxt-link :to="`/blogging/${item.slug}`" class="text-accent mb-5"
            >Read more &rarr;</nuxt-link
          >

          <div class="hidden md:flex justify-center">
            <div class="p-1 ">
              <div
                class="p-1 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-400 rounded-full"
              >
                <nuxt-img
                  src="/avatar.png"
                  format="webp"
                  class=" w-14 h-14 rounded-full"
                  width="50"
                  height="50"
                />
              </div>
            </div>

            <div class="author ml-5 mt-3 opacity-70">
              <h2>Ekene Eze</h2>
              <p>{{ formatDate(item.date) }}</p>
            </div>
          </div>
        </div>
      </div>
      <form class="flex justify-center mb-10">
        <div class=" ">
          <div class="relative">
            <input
              type="search"
              @input="$fetch"
              v-model="query"
              placeholder="Search Posts"
              class=" pr-16 input input-bordered border-2 border-gray-300 text-gray-300 w-full"
            />
          </div>
        </div>
      </form>
    </section>
    <!-- show articles on this site and elsewhere -->
    <section
      class="block md:flex container justify-between mx-auto text-primary-content"
    >
      <div class="md:w-1/2">
        <h1 class="flex text-lg text-3xl justify-center mb-10 opacity-70">
          On this site
        </h1>
        <div class="grid flex-grow place-items-center ">
          <nuxt-link
            v-for="article in nativePosts"
            :key="article.title"
            :to="`/blogging/${article.slug}`"
            class="card lg:card-side mb-10 border-2 border-yellow-500 max-w-xxl mx-auto"
          >
            <div class="card-body">
              <h2 class="card-title hover:opacity-70">{{ article.title }}</h2>
              <p class="opacity-70">
                {{ shortDescription(article.description) }}
              </p>
              <p class="mt-3 opacity-70">{{ formatDate(article.date) }}</p>
            </div>
          </nuxt-link>
        </div>
      </div>

      <div class="md:w-1/2">
        <h1 class="flex text-lg text-3xl justify-center mb-10 opacity-70">
          Elsewhere
        </h1>
        <div class="container px-5 py-10">
          <!-- <pre>{{ data.talks }}</pre> -->
          <nuxt-link
            v-for="post in externalPosts"
            :key="post.title"
            class="flex relative pt-10 pb-10 sm:items-center md:w-2/3 mx-auto"
            :to="post.url"
            target="blank"
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
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0 text-primary-content">
                <h2 class="font-medium title-font mb-1 text-xl ">
                  {{ post.title }}
                </h2>
                <p class="leading-relaxed opacity-70">
                  {{ post.description }}
                </p>
                <p class="mt-3 opacity-70">{{ formatDate(post.date) }}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  head: {
    title: "Ekene Eze | Blog",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          'Read Ekene"s blog posts about web development with modern tools and technologies'
      }
    ]
  },
  data() {
    return {
      externalPosts: "",
      nativePosts: "",
      query: ""
    };
  },
  async fetch() {
    this.nativePosts = await this.$content("blog")
      .sortBy("date", "desc")
      .search(this.query)
      .fetch();
    this.externalPosts = await this.$content("externals")
      .sortBy("date", "desc")
      .search(this.query)
      .fetch();
  },
  computed: {
    featuredPost() {
      if (this.nativePosts) {
        let post = this.nativePosts.filter(item => item.featured === true);
        return post;
      }
      return [];
    }
  },

  methods: {
    // truncate the description
    shortDescription(description) {
      return description.toString().substring(0, 200) + "...";
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    }
  }
};
</script>
