<template>
  <article
    v-if="post"
    class="max-w-3xl mx-auto p-5 font-sans leading-relaxed text-gray-700 dark:text-gray-300 dark:bg-gray-800"
  >
    <h1 class="text-3xl text-blue-800 dark:text-blue-400 mb-5">
      {{ post.title }}
    </h1>
    <p class="italic text-gray-600 dark:text-gray-400 mb-10">
      published on {{ formatDate(post.date) }}
    </p>
    <nuxt-content :document="post" class="post-content" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error, payload }) {
    if (payload) return { post: payload }

    try {
      const post = await $content('posts', params.slug).fetch()
      return { post }
    } catch (err) {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return 'Unknown date'
      const d = new Date(date)
      if (isNaN(d.getTime())) return 'Invalid date'

      // Format as DD/MM/YY
      const day = String(d.getDate()).padStart(2, '0')
      const month = String(d.getMonth() + 1).padStart(2, '0') // Months are 0-indexed
      const year = String(d.getFullYear()).slice(-2)

      return `${day}/${month}/${year}`
    },
  },
  mounted() {
    this.$nextTick(() => {
      const codeBlocks = document.querySelectorAll('.post-content pre')
      codeBlocks.forEach((block) => {
        const fileName = block.getAttribute('data-filename') || 'Code'
        const header = document.createElement('div')
        header.className = 'code-header'
        header.textContent = fileName
        block.insertBefore(header, block.firstChild)
      })
    })
  },
}
</script>

<style scoped>
.post-content h2 {
  @apply text-2xl text-indigo-800 mt-8 mb-4;
}

.dark .post-content h2 {
  @apply text-indigo-400;
}

.post-content p {
  @apply mb-4;
}

.post-content ul,
.post-content ol {
  @apply mb-4 pl-8;
}

.post-content code {
  @apply bg-gray-100 px-2 py-1 rounded font-mono;
}

.dark .post-content code {
  @apply bg-gray-700;
}

.post-content pre {
  @apply bg-gray-100 rounded overflow-hidden mb-8 relative;
}

.dark .post-content pre {
  @apply bg-gray-700;
}

.post-content pre code {
  @apply block px-4 py-3 overflow-x-auto bg-transparent;
}

.post-content .code-header {
  @apply bg-gray-800 text-white font-mono px-2 py-1 text-sm;
}

.dark .post-content .code-header {
  @apply bg-gray-900;
}
</style>
