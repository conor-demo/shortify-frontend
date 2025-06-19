<template>
  <div>
    <h1>Hello, Vue!</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Welcome to Vue.js!'
    }
  }
}
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
