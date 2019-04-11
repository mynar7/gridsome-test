<template>
  <LayoutTwo :latest="true">
    <h1>About us</h1>
    <p>Mama Jama Banana Pajama</p>
  </LayoutTwo>
</template>


<script>
import LayoutTwo from '../layouts/LayoutTwo.vue'
export default {
  metaInfo: {
    title: 'Postings'
  },
  components: {
    'LayoutTwo': LayoutTwo
  }
}
</script>