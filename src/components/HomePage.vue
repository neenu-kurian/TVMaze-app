/* eslint-disable quotes */
<template>
  <div class="search__container">
    <form class="search__wrapper" @submit.prevent="searchShows">
      <input
        type="text"
        v-model="search"
        name="search"
        placeholder="Search tv shows..."
        class="search__bar"
      />
      <PrimaryButton type="submit">Search</PrimaryButton>
    </form>
    <fade-loader
      :loading="loading"
      :color="color"
      class="show__spinner"
    ></fade-loader>

    <show-card v-if="shows.length" :shows="shows"></show-card>
    <results-error v-else></results-error>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import ShowCard from '../common/ShowCard.vue'
import PrimaryButton from '../common/PrimaryButton.vue'
import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
import ResultsError from '@/common/ResultsError.vue'

export default {
  name: 'SearchPage',
  data: function () {
    return {
      search: '',
      color: '#FFFFFF'
    }
  },
  computed: {
    ...mapState(['loading']),
    ...mapGetters(['shows'])
  },
  created () {
    this.search = this.searchText
    this.fetchTvShows()
  },
  components: { PrimaryButton, FadeLoader, ShowCard, ResultsError },
  methods: {
    searchShows () {
      this.$store.commit('SET_SEARCH', this.search)
      if (this.search) {
        this.fetchSearchResults()
      } else {
        this.fetchTvShows()
      }
    },
    fetchTvShows () {
      this.$store.dispatch('fetchTvShows')
    },
    fetchSearchResults () {
      this.$store.dispatch('fetchSearchResults')
    }

  }
}
</script>
