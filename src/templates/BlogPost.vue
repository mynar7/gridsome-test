<template lang="pug">
  Layout
    h1 {{$page.blogPost.title}}
    div(v-html="$page.blogPost.content")
    h4 {{this.$route.params}}
</template>

<page-query>
query Post ($path: String!){
  blogPost (path: $path) {
    content
    title
  }
}
</page-query>

