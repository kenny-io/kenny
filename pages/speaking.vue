<template>
  <div class="">
    <section class="">
      <div class="hero md:min-h-screen w-full">
        <div class="hero-overlay conf"></div>
        <div class="text-center hero-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold text-accent mt-5">
              Speaking
            </h1>
            <p class="mb-5 text-secondary-content opacity-70">
              I've spoken at ...hmmmm, I don't actually have a number :) But I
              love any opportunity to share with the community so if you have an
              event coming up and you think I could be a good fit, please
              contact me below.
            </p>
            <a
              href="mailto:ekeneeze3@gmail.com?bcc=ekene@netlify.com&subject=Come%20Speak%20at%20My%20Conference!&body=Hello%20Ekene,"
            >
              <app-button :title="`Got a conference?`" />
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
            <div class="card shadow-xl overflow-hidden w-full max-w-lg ">
              <figure class=" px-10 pt-10">
                <img class="rounded-xl" src="../static/kenny-3.jpg" />
              </figure>
              <div class="justify-end card-body text-primary-content">
                <h2 class="card-title ">{{ talk.conference }}</h2>
                <p class="opacity-80">
                  {{ shortDescription(talk.description) }}
                </p>
                <div class="card-actions">
                  <app-button :title="`Watch Talk`" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.conf {
  background-image: url("../static/kenny-speaking.jpg");
  background-size: cover;
  opacity: 0.9;
}
</style>

<script>
export default {
  data() {
    return {
      talks: "",
      query: ""
    };
  },
  async fetch() {
    this.talks = await this.$content("talks")
      .only(["title", "description", "conference"])
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
