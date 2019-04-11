<template lang="pug">
  Layout
    h1 {{$page.blogPost.title}}
    div(v-html="$page.blogPost.content")
</template>

<page-query>
query Post ($path: String!){
  blogPost (path: $path) {
    content
    title
  }
}
</page-query>