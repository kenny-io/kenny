<template>
  <section class="relative py-20 2xl:py-40 text-primary-content">
    <div class="relative container px-4 mx-auto">
      <div class="max-w-3xl mx-auto">
        <div class="max-w-xl">
          <h2 class="mt-12 mb-14 text-5xl font-bold font-heading ">
            {{ joke.setup }}
          </h2>

          <p class="mb-20 text-xl opacity-70">
            {{ joke.delivery }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      joke: ""
    };
  },

  mounted() {
    this.getTodaysJoke();
  },

  methods: {
    getTodaysJoke() {
      fetch("/api/get-joke")
        .then(res => res.json())
        .then(res => {
          this.joke = res;
        });
    }
  }
};
</script>
