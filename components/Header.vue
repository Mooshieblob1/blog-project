<template>
  <header class="bg-indigo-900 dark:bg-gray-900 relative p-4">
    <webNavbar />
    <button
      class="dark-mode-switch"
      @click="toggleDarkMode"
      aria-label="Toggle dark mode"
    >
      <span v-if="isDarkMode" class="icon sun">🌞</span>
      <span v-else class="icon moon">🌙</span>
    </button>
  </header>
</template>

<script>
import webNavbar from '@/components/webNavbar.vue'

export default {
  components: {
    webNavbar,
  },
  data() {
    return {
      isDarkMode: false,
    }
  },
  mounted() {
    this.isDarkMode = document.documentElement.classList.contains('dark')
    this.applyDarkMode()

    // Watch for system preference changes
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', this.onSystemPreferenceChange)
  },
  beforeDestroy() {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', this.onSystemPreferenceChange)
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      this.applyDarkMode()
    },
    applyDarkMode() {
      document.documentElement.classList.toggle('dark', this.isDarkMode)
      localStorage.setItem('darkMode', this.isDarkMode)
    },
    onSystemPreferenceChange(e) {
      this.isDarkMode = e.matches
      this.applyDarkMode()
    },
  },
}
</script>

<style scoped>
.dark-mode-switch {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  font-size: 24px;
}
</style>
