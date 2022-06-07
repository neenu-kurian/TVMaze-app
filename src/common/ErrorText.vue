<template>
  <p class="error__message">
    <slot>Oops, looks like there are too many results, Please try to refine your search</slot>
  </p>
</template>

<script>
export default {
  name: 'ErrorText'
}
</script>
