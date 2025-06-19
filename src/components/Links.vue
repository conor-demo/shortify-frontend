<template>
  <div>
    <h1>Links</h1>
    <ul>
      <li v-for="link in links" :key="link.id">
        <a :href="link.url" target="_blank">{{ link.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      links: []
    }
  },
  mounted() {
    this.fetchLinks();
  },
  methods: {
    async fetchLinks() {
      try {
        const response = await axios.get(process.env.API_URL + '/links');
        this.links = response.data;
      } catch (error) {
        console.error('Error fetching links:', error);
      }
    }
  }
}
</script>