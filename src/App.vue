<template>
  <div id="app">
    <h1>Link Shortener</h1>
    <input type="text" v-model="longUrl" placeholder="Enter URL to shorten">
    <button @click="shortenUrl">Shorten</button>
    <p v-if="shortUrl">Shortened URL: <a :href="shortUrl" target="_blank">{{ shortUrl }}</a></p>
    <p v-if="error">Error: {{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      longUrl: '',
      shortUrl: '',
      error: null,
    };
  },
  methods: {
    async shortenUrl() {
      try {
        const response = await axios.post(process.env.VUE_APP_API_URL + '/links', { longUrl: this.longUrl });
        this.shortUrl = response.data.shortUrl;
        this.error = null;
      } catch (err) {
        this.error = err.message || 'Failed to shorten URL';
        this.shortUrl = '';
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
input[type="text"] {
  padding: 10px;
  margin: 10px;
  width: 300px;
}
button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
