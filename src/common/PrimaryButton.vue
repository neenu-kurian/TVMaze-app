<template>
  <button :type="type" class="btn--primary uppercase" :name="name" @click="handleClick">
    <slot>Search</slot>
  </button>
</template>

<script>
export default {
  name: 'PrimaryButton',
  props: {
    type: String,
    name: String
  },
  methods: {
    // function to go back to homepage/previous page when back button is clicked
    handleClick () {
      if (this.name === 'back') {
        this.$router.push('/show')
      }
    }
  }
}
</script>
