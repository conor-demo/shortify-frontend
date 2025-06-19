<template>
  <div>
    <h1>Welcome to the Vue Frontend!</h1>
    <p>API URL: {{ apiUrl }}</p>
    <button @click="fetchData">Fetch Data</button>
    <div v-if="data">
      <h2>Data from API:</h2>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      apiUrl: process.env.VUE_APP_API_URL,
      data: null,
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(this.apiUrl);
        this.data = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
};
</script>
