<template>
  <div class="parent">
    <div class="hero min-h-screen">
      <div class="hero-overlay conf"></div>
      <div class="text-center hero-content text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold text-accent">
            Speaking...
          </h1>
          <p class="mb-5 text-primary-content opacity-70">
            I've spoken at ...hmmmm, I don't actually have a number :) But I
            love any opportunity to share with the community so if you have an
            event coming up and you think I could be a good fit, please contact
            me below.
          </p>
          <button class="btn btn-primary text-accent-content">
            Got a confernece?
          </button>
        </div>
      </div>
    </div>

    <div class="mx-auto">
      <div class="sm:text-center mt-16">
        <p class="text-primary-content text-2xl text-base uppercase">
          Featured Talks
        </p>
        <div class="flex justify-center">
          <div class="w-32 h-1 rounded-full bg-accent-focus inline-flex "></div>
        </div>
      </div>
    </div>

    <section class=" body-font">
      <div class=" px-5 py-12 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div v-for="talk in talks" :key="talk.title" class="p-4 md:w-1/3">
            <div class="card shadow-xl overflow-hidden w-full max-w-lg ">
              <figure class=" px-10 pt-10">
                <img class=" rounded-xl  " src="../static/kenny-3.jpg" />
              </figure>
              <div class="justify-end card-body text-primary-content">
                <h2 class="card-title ">{{ talk.title }}</h2>
                <p class="opacity-80">
                  {{ talk.description }}
                </p>
                <div class="card-actions">
                  <button class="btn btn-primary text-accent-content">
                    Get the slides
                  </button>
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
  opacity: 0.3;
}
</style>

<script>
export default {
  data() {
    return {
      talks: [
        {
          title: "VueConf London 21",
          description:
            "Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        },
        {
          title: "Concatenate Conf 19",
          description:
            "Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        },
        {
          title: "InfoBit Shift 21",
          description:
            "Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
        }
      ]
    };
  }
};
</script>
