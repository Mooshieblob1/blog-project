<template>
  <nav class="bg-blue-500">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center">
          <nuxt-link to="/" class="text-white font-roboto text-xl font-bold"
            >My Blog</nuxt-link
          >
        </div>
        <div class="flex items-center">
          <nuxt-link to="/" class="text-white font-roboto hover:glow"
            >Blog</nuxt-link
          >
          <nuxt-link to="/about" class="ml-4 text-white font-roboto hover:glow"
            >About</nuxt-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'WebNavbar',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.font-roboto {
  font-family: 'Roboto', sans-serif;
}

.hover\:glow:hover {
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
}
</style>
