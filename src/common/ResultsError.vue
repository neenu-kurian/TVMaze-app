<template>
  <div class="error__wrapper">
    <div class="error__image">
         <img src="../assets/images/sad-face.jpeg" alt="sad-face" class="sad-image"/>
    </div>
    <div class="error__text">
        <error-text>Sorry, we couldnt find any results. Please try another tv show</error-text>
      </div>
    </div>
</template>

<script>
import ErrorText from '../common/ErrorText.vue'
export default {
  name: 'ResultsError',
  components: {
    ErrorText
  }
}
</script>
