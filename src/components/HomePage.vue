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

    <show-card :shows="shows"></show-card>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import ShowCard from '../common/ShowCard.vue'
import PrimaryButton from '../common/PrimaryButton.vue'
import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
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
  components: { PrimaryButton, FadeLoader, ShowCard },
  methods: {
    searchShows () {
      this.$store.commit('SET_SEARCH', this.search)
      this.fetchSearchResults()
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
