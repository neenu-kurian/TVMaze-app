<template>
  <div class="detail__show">
    <div class="loader" v-if="loading"></div>
    <div class="detail__container grid" v-if="!loading">
      <div class="left">
        <PrimaryButton type="text" name="back" class="btn__back left uppercase">Back</PrimaryButton>
        <img class="detail__image full-width" v-if="show.image" :src="show.image.original" :alt="show.name" />
        <img class="detail__image full-width" v-else src="../assets/images/default.jpeg" alt="fallback" />
      </div>
      <div class="right">
        <div class="detail__wrapper">
          <h1 class="detail__title">{{ show.name }}</h1>
           <Genre :genre="show.genres[0]" />
           <Rating :rating="show.rating.average" />
          <p class="detail__summary">{{ summary }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import PrimaryButton from '@/common/PrimaryButton.vue'
import Rating from '@/common/Rating.vue'
import Genre from '@/common/Genre.vue'

export default {
  name: 'ShowDetail',
  data: function () {
    return {
      color: '#FFFFFF'
    }
  },
  computed: {
    ...mapGetters(['show', 'summary']),
    ...mapState(['loading'])
  },
  components: {
    PrimaryButton,
    Rating,
    Genre
  },
  created () {
    this.fetchShowDetails()
  },
  beforeDestroy () {
    this.$store.commit('CLEAR_SHOW_DETAILS')
  },
  methods: {
    fetchShowDetails () {
      // fetch details of the show and go to detail page
      this.$store.dispatch('fetchShowDetails', this.$route.params.id)
    }
  }
}
</script>
