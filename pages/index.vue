<template>
  <div class="dark overflow-hidden">
    <app-hero />
  </div>
</template>

<script>
import getSiteMeta from "~/utils/getSiteMeta";
export default {
  head: {
    title: "Ekene Eze | Website",
    meta: [
      ...this.meta,

      {
        hid: "description",
        name: "description",
        content:
          "Kenny is a Software Engineer, Content creator and Developer Experience Engineer at Netlify. Get insights into his work, projects and more on this site..."
      },
      {
        hid: "og:image",
        property: "og:image",
        content:
          "https://res.cloudinary.com/kennyy/image/upload/v1634571746/blogging/og.png"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      }
    ]
  }
};
</script>
