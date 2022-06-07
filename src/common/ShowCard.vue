<template>
  <div class="show__container">
    <div class="show__wrapper">
      <div class="show__tile" v-for="({name,image,id},index) in shows" :key="index">
        <router-link class="show__link" :to="`/show/${id}`">
          <img class="show__img" v-if="image!==null" :src="image.original" alt="show" />
          <img class="show__img" v-else src="../assets/images/default.jpeg" alt="fallback" />
          <h2 class="show__title">{{name}}</h2>
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
