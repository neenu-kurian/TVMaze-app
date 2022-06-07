<template>
  <div class="show__container">
    <div class="show__wrapper">
      <div class="show__tile" v-for="({name,image,id,genres,rating},index) in shows" :key="index">
        <router-link class="show__link" :to="`/show/${id}`">
          <img class="show__img" v-if="image!==null" :src="image.original" alt="show" />
          <img class="show__img" v-else src="../assets/images/default.jpeg" alt="fallback" />
          <div class="show__details">
          <h2 class="show__title">{{name}}</h2>
          <span class="show__genre" v-if="genres.length">{{genres[0]}}</span>
          <img src="../assets/images/star-regular.png" alt="rating"  v-if="rating.average" class="show__rating--icon"/>
          <span v-if="rating.average" class="show__rating">{{rating.average}}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ShowCard',
  computed: {
    ...mapState(['loading'])
  },
  props: ['shows']
}
</script>
