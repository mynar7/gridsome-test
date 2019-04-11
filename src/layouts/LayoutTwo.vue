<template lang="pug">
div
  h2 Layout Two
  slot(v-if="latest")
</template>

<script>
export default {
  props: [
    'latest'
  ]
}
</script>
