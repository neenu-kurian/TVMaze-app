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
    handleClick () {
      if (this.name === 'back') {
        this.$router.push('/show')
      }
    }
  }
}
</script>
