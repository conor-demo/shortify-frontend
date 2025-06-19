<template>
  <div>
    <input type="text" v-model="longUrl" placeholder="Enter URL to shorten" />
    <button @click="createLink">Shorten</button>
    <p v-if="shortUrl">Shortened URL: <a :href="shortUrl" target="_blank">{{ shortUrl }}</a></p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      longUrl: '',
      shortUrl: ''
    };
  },
  methods: {
    async createLink() {
      try {
        const response = await axios.post(process.env.API_URL + '/links', { longUrl: this.longUrl });
        this.shortUrl = response.data.shortUrl;
      } catch (error) {
        console.error('Error creating link:', error);
        alert('Failed to shorten URL.');
      }
    }
  }
};
</script>