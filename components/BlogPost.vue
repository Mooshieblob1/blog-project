<template>
  <article class="blog-post">
    <h2>{{ title }}</h2>
    <p>{{ excerpt }}</p>
    <nuxt-link :to="`/posts/${slug}`" class="read-more">Read more</nuxt-link>
  </article>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.blog-post {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.read-more {
  display: inline-block;
  margin-top: 0.5rem;
  color: #3498db;
  text-decoration: none;
}

.read-more:hover {
  text-decoration: underline;
}
</style>
