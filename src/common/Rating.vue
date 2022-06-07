<template>
  <div v-if="rating" class="show__rating--wrapper">
    <img
      src="../assets/images/star-regular.png"
      alt="rating"
      class="show__rating--icon"
    />
    <span class="show__rating">{{ rating }}</span>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: {
    rating: Number
  }
}
</script>
