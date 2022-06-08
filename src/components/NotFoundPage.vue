<template>
  <div class="notfound__container flex-center">
    <div class="notfound__img">
        <img src="../assets/images/sad-face.jpeg" alt="sad-face" class="full-width"/>
    </div>
    <div class="notfound__text">
      <h1 class="notfound__title">Page Not Found</h1>
      <error-text>We can't find the page you are looking for. You can either return to the previous page,visit our homepage or contact our support team.</error-text>
    </div>
  </div>
</template>

<script>
import ErrorText from '@/common/ErrorText.vue'
export default {
  components: { ErrorText },
  name: 'NotFoundPage'
}
</script>
