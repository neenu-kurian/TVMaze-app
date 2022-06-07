<template>
  <div v-if="genre" class="show__genre--wrapper">
    <span class="show__genre">{{genre}}</span>
  </div>
</template>

<script>
export default {
  name: 'Genre',
  props: ['genre']
}
</script>
