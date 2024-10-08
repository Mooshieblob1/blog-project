<template>
  <div>
    <h1>Recent Posts</h1>
    <BlogPost
      v-for="post in posts"
      :key="post.slug"
      :title="post.title"
      :excerpt="post.description"
      :slug="post.slug"
    />
  </div>
</template>

<script>
import BlogPost from '~/components/BlogPost.vue'

export default {
  components: {
    BlogPost,
  },
  async asyncData({ $content }) {
    const posts = await $content('posts')
      .only(['title', 'description', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return { posts }
  },
}
</script>
