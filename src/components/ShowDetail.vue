<template>
  <div class="detail__show">
    <fade-loader
      :loading="loading"
      :color="color"
      class="show__spinner"
    ></fade-loader>
    <div class="detail__container" v-if="!loading">
      <div class="left">
        <PrimaryButton type="text" name="back" class="btn__back">Back</PrimaryButton>
        <img class="detail__image" :src="show.image.original" alt="show" />
      </div>
      <div class="right">
        <div class="detail__wrapper">
          <h1 class="detail__title">{{ show.name }}</h1>
           <div class="detail__rating" v-if="show.rating.average"> Rating: {{ show.rating.average}} </div>
          <p class="detail__summary">{{ summary }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
import PrimaryButton from '../common/PrimaryButton.vue'

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
    FadeLoader,
    PrimaryButton
  },
  created () {
    this.fetchShowDetails()
  },
  beforeDestroy () {
    this.$store.commit('CLEAR_SHOW_DETAILS')
  },
  methods: {
    fetchShowDetails () {
      this.$store.dispatch('fetchShowDetails', this.$route.params.id)
    }
  }
}
</script>
