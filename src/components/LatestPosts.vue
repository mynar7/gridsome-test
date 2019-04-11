<template lang="pug">
  section
    h3 Latest posts
    article(v-for="edge in $static.allBlogPost.edges" :key="edge.node.id")
      h4 {{edge.node.title}}
      p {{edge.node.excerpt}}
      p {{'Posted on: ' + edge.node.date}}
      g-link(:to='`/posts/${edge.node.slug}`') Read More
</template>

<static-query>
  query {
    allBlogPost {
      edges {
        node {
          content
          id
          title
          excerpt
          slug
          date (format: "LLLL")
        }
      }
    }
  }
</static-query>

