<template>
  <div class="show__container">
    <div class="show__wrapper">
      <div class="show__tile" v-for="({name,image,id,genres,rating},index) in shows" :key="index">
        <router-link class="show__link" :to="`/show/${id}`">
          <img class="show__img" v-if="image!==null" :src="image.original" alt="show" />
          <img class="show__img" v-else src="../assets/images/default.jpeg" alt="fallback" />
          <div class="show__details">
          <h2 class="show__title">{{name}}</h2>
          <Genre :genre="genres[0]" />
          <Rating :rating="rating.average" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Rating from './Rating.vue'
import Genre from './Genre.vue'

export default {
  name: 'ShowCard',
  computed: {
    ...mapState(['loading'])
  },
  props: ['shows'],
  components: {
    Rating,
    Genre
  }
}
</script>
