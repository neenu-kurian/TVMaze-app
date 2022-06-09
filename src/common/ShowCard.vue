<template>
  <div class="show__container">
    <div class="show__wrapper grid">
      <div class="show__tile" v-for="({name,image,id,genres,rating},index) in shows" :key="index">
        <router-link class="show__link" :to="`/show/${id}`">
          <img class="show__img img__original" v-if="image!==null" :src="image.original" :alt="name" />
          <img class="show__img img__fallback" v-else src="../assets/images/default.jpeg" alt="default" />
          <div class="show__details">
          <h1 class="show__title" v-if="name">{{name}}</h1>
          <Genre :genre="genres[0]" />
          <Rating :rating="rating.average" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from './Rating.vue'
import Genre from './Genre.vue'

export default {
  name: 'ShowCard',
  props: ['shows'],
  components: {
    Rating,
    Genre
  }
}
</script>
