<template>
  <div role="main">
    <section>
      <div class="hero md:min-h-screen w-full">
        <div class="hero-overlay conf"></div>
        <div class="text-center hero-content">
          <div class="max-w-md mt-5">
            <h1 class="mb-5 text-5xl font-bold text-accent mt-8">
              Speaking
            </h1>
            <p class="mb-5 text-secondary-content opacity-80">
              I've spoken at ...hmmmm, I don't actually have a number :) But I
              love any opportunity to share with the community so if you have an
              event coming up and you think I could be a good fit, please
              contact me below.
            </p>
            <a
              href="mailto:ekeneeze3@gmail.com?bcc=ekene@netlify.com&subject=Come%20Speak%20at%20My%20Conference!&body=Hello%20Ekene,"
              class="btn text-accent-content bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-400"
            >
              Got a conference ?
            </a>
          </div>
        </div>
      </div>
    </section>
    <div class="mx-auto mt-16 align-center ">
      <div class="sm:text-center">
        <div class="flex justify-center">
          <div class="w-32 h-1 rounded-full bg-accent-focus inline-flex"></div>
        </div>
      </div>
    </div>
    <!-- // show search form -->
    <form class="flex justify-center mt-10">
      <div class="form-control w-90">
        <div class="relative">
          <input
            type="search"
            @input="$fetch"
            v-model="query"
            placeholder="Search Talks"
            class=" pr-16 input input-bordered border-2 border-gray-300 text-gray-300"
          />
        </div>
      </div>
    </form>
    <section class=" body-font">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div v-for="talk in talks" :key="talk.title" class="p-4 md:w-1/3">
            <nuxt-link :to="`/speaking/${talk.slug}`">
              <div class="card shadow-xl overflow-hidden w-full max-w-lg">
                <figure class="px-10 pt-10">
                  <nuxt-img
                    alt="picture of kenny speaking at a conference"
                    class="rounded-xl"
                    format="webp"
                    src="/kenny-speaks.jpg"
                    sizes="sm:100vw md:50vw lg:400px"
                    width="100"
                    height="100"
                  />
                </figure>
                <div class="justify-end card-body text-primary-content">
                  <div class="flex  space-x-4 py-2">
                    <h2 class="card-title ">{{ talk.conference }}</h2>

                    <span
                      v-if="talk.status === 'upcoming'"
                      class="badge badge-accent badge-outline"
                    >
                      {{ talk.status }}
                    </span>
                  </div>
                  <p class="opacity-80 mb-3 font-bold text-2xl">
                    {{ talk.title }}
                  </p>
                  <p class="opacity-80">
                    {{ shortDescription(talk.description) }}
                  </p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.conf {
  background-image: url("../../static/kenny-speaking.jpg");
  background-size: cover;
  opacity: 0.9;
}
</style>

<script>
export default {
  head: {
    title: "Ekene Eze | Speaking",
    meta: [
      {
        hid: "description",
        name: "description",
        content: 'A list of Ekene Eze"s Conference talks'
      }
    ]
  },
  data() {
    return {
      talks: "",
      query: ""
    };
  },
  async fetch() {
    this.talks = await this.$content("talks")
      .sortBy("date", "desc")
      .search(this.query)
      .fetch();
  },
  methods: {
    // truncate the description
    shortDescription(description) {
      return description.toString().substring(0, 100) + "...";
    }
  }
};
</script>
