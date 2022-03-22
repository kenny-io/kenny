<template>
  <section>
    <div
      class="relative items-center w-full mx-auto md:px-12 lg:px-16 max-w-7xl"
    >
      <div>
        <div
          class="
              relative
              p-10
              space-y-12
              overflow-hidden
              lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8
              rounded-xl
            "
        >
          <div
            class="relative flex flex-col p-8 bg-card-bg text-primary-content"
          >
            <div class="flex-1">
              <h3 class="text-xl font-semibold opacity-70">
                Video Content
              </h3>
              <p class="flex items-baseline mt-4 text-neutral-600">
                <span class="text-5xl font-extrabold tracking-tight"
                  >$ {{ price }}</span
                >
                <span class="ml-1 text-xl font-semibold">/video</span>
              </p>
              <p class="mt-6 text-gray-500">
                This package allows me to create video content for you or your
                business on my
                <a class="underline" href="https://www.youtube.com/c/EkeneEze"
                  >YouTube channel.</a
                >
              </p>
              <!-- Feature list -->
              <ul role="list" class="pt-6 mt-6 space-y-6 border-t">
                <span class="text-lg font-semibold text-neutral-600"
                  >What's included?</span
                >
                <!-- <div > -->
                <li v-for="(item, index) in video" :key="index" class="flex">
                  <div
                    class="
                        inline-flex
                        items-center
                        w-6
                        h-6
                        bg-accent
                        rounded-xl
                      "
                  >
                    <svg
                      class="flex-shrink-0 w-4 h-4 mx-auto text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span class="ml-3 text-neutral-600">{{ item }}</span>
                </li>
                <!-- </div> -->
              </ul>
            </div>
            <!-- <div class="mt-6 rounded-lg">
              <a
                href="#"
                type="highlight"
                class="
                    w-full
                    items-center
                    block
                    px-10
                    py-3.5
                    text-base
                    font-medium
                    text-center text-blue-600
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border-2 border-white
                    shadow-md
                    rounded-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-gray-500
                    bg-white
                  "
              >
                Get Started
              </a>
            </div> -->
          </div>
          <div
            class="relative flex flex-col p-8 bg-accent rounded-2xl text-accent-content"
          >
            <div class="relative flex-1">
              <h3 class="text-xl font-semibold ">Speaking</h3>
              <p class="flex items-baseline mt-4 ">
                <span class="text-5xl font-extrabold tracking-tight"
                  >$ {{ price }}
                </span>
                <span class="ml-1 text-xl font-semibold">/talk</span>
              </p>
              <p class="mt-6  text-solitud">
                This package covers all sorts of speaking engagements. Podcasts,
                webinars, conference talks, and meetups.
              </p>
              <!-- Feature list -->
              <ul role="list" class="pt-6 mt-6 space-y-6 border-t">
                <span class="text-lg font-semibold ">What's included?</span>
                <li v-for="(item, index) in speaking" :key="index" class="flex">
                  <div
                    class="inline-flex items-center w-6 h-6 bg-white rounded-xl"
                  >
                    <svg
                      class="flex-shrink-0 w-4 h-4 mx-auto text-accent"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span class="ml-3 ">{{ item }}</span>
                </li>
              </ul>
            </div>
            <!-- <div class="z-50 mt-6 rounded-lg">
              <a
                href="/pricing"
                type="highlight"
                class="
                    w-full
                    items-center
                    block
                    px-10
                    py-3.5
                    text-base
                    font-medium
                    text-center text-blue-600
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border-2 border-white
                    shadow-md
                    rounded-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-gray-500
                    bg-white
                  "
              >
                Get started
              </a>
            </div> -->
          </div>
          <div
            class="relative flex flex-col p-8 bg-card-bg text-primary-content"
          >
            <div class="flex-1">
              <h3 class="text-xl font-semibold opacity-70">
                Blog Posts
              </h3>
              <p class="flex items-baseline mt-4 text-neutral-600">
                <span class="text-5xl font-extrabold tracking-tight"
                  >$ {{ price }}</span
                >
                <span class="ml-1 text-xl font-semibold">/post</span>
              </p>
              <p class="mt-6 text-gray-500">
                This package allows me to create blog posts for you or your
                clients. You have ownership of the content and will only be
                publish on your blog.
              </p>
              <!-- Feature list -->
              <ul role="list" class="pt-6 mt-6 space-y-6 border-t">
                <span class="text-lg font-semibold text-neutral-600"
                  >What's included?</span
                >
                <!-- <div > -->
                <li v-for="(item, index) in blogging" :key="index" class="flex">
                  <div
                    class="
                        inline-flex
                        items-center
                        w-6
                        h-6
                        bg-accent
                        rounded-xl
                      "
                  >
                    <svg
                      class="flex-shrink-0 w-4 h-4 mx-auto text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span class="ml-3 text-neutral-600">{{ item }}</span>
                </li>
                <!-- </div> -->
              </ul>
            </div>
            <!-- <div class="mt-6 rounded-lg">
              <a
                href="#"
                type="highlight"
                class="
                    w-full
                    items-center
                    block
                    px-10
                    py-3.5
                    text-base
                    font-medium
                    text-center text-blue-600
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border-2 border-white
                    shadow-md
                    rounded-xl
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-gray-500
                    bg-white
                  "
              >
                Get Started
              </a>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      price: "1,000",
      video: [
        "Up to 30 min of video content",
        "Will be specific to your business",
        "I'll advise viewers to use your tool",
        "Call out any specifics per your request",
        "I'll promote the content on my social media channels",
        "I'll share it within my developer networks"
      ],
      speaking: [
        "Up to 30 min of speaking and presentation",
        "Will be a topic of my choosing approved by you",
        "Remote or on-site (you'll cover travel expenses)",
        "Will tweet to promote the talk on my network",
        "I'll share the event on my social media channels"
      ],
      blogging: [
        "Up to 1500 words of content",
        "Will be a topic of my choosing approved by you",
        "Will be posted on your blog",
        "You have full ownership of the content",
        "I'll tweet to promote the post on my network"
      ]
    };
  }
};
</script>
