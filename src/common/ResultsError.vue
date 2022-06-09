<template>
  <div class="error__wrapper flex-center">
    <div class="error__image">
         <img src="../assets/images/sad-face.jpeg" alt="sad-face" class="full-width"/>
    </div>
    <div class="error__text">
        <error-text v-if="!error">Sorry, we couldnt find any results. Please try another tv show</error-text>
        <error-text v-else>Something went wrong, please try again later</error-text>
      </div>
    </div>
</template>

<script>
import ErrorText from '@/common/ErrorText.vue'
import { mapState } from 'vuex'

export default {
  name: 'ResultsError',
  components: {
    ErrorText
  },
  computed: {
    ...mapState(['error'])
  }
}
</script>
