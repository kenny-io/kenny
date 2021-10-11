<template>
  <button
    class="btn text-accent-content bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-green-400 hover:to-blue-400"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    title: {
      type: String,
      default: "Button"
    }
  }
};
</script>
