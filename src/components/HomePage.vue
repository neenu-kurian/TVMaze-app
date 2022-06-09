/* eslint-disable quotes */
<template>
  <div class="search__container">
    <form class="search__wrapper center" @submit.prevent="searchShows">
      <input
        type="text"
        v-model="search"
        name="search"
        placeholder="Search tv shows..."
        class="search__bar"
      />
      <PrimaryButton type="submit">Search</PrimaryButton>
    </form>

    <div class="loader" v-if="loading"></div>
    <show-card v-if="shows.length && !error" :shows="shows"></show-card>
    <results-error v-else></results-error>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import ShowCard from '@/common/ShowCard.vue'
import PrimaryButton from '@/common/PrimaryButton.vue'
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
    ...mapState(['loading', 'error']),
    ...mapGetters(['shows', 'searchText'])
  },
  created () {
    this.search = this.searchText

    // if no text is entered, show default results, else show result for search text
    if (this.search !== '') {
      this.fetchSearchResults()
    } else {
      this.fetchTvShows()
    }
  },
  components: { PrimaryButton, ShowCard, ResultsError },
  beforeDestroy () {
    this.$store.commit('CLEAR_SHOWS')
  },
  methods: {
    searchShows () {
      this.$store.commit('SET_SEARCH', this.search)
      // if no text is entered, show default results, else show result for search text
      if (this.search) {
        this.fetchSearchResults()
      } else {
        this.fetchTvShows()
      }
    },
    fetchTvShows () {
      // to fetch some default shows
      this.$store.dispatch('fetchTvShows')
    },
    fetchSearchResults () {
      // to fetch result of search text
      this.$store.dispatch('fetchSearchResults')
    }

  }
}
</script>
