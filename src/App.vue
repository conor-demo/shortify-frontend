<template>
  <div>
    <h1>Welcome to the Vue Frontend</h1>
    <p>API URL: {{ apiUrl }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiUrl: process.env.API_URL || 'http://localhost:3000'
    }
  }
}
</script>