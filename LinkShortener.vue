<template>
  <div>
    <h1>Link Shortener</h1>
    <input type="text" v-model="longUrl" placeholder="Enter long URL" />
    <button @click="shortenLink">Shorten</button>
    <p v-if="shortUrl">Shortened URL: <a :href="shortUrl" target="_blank">{{ shortUrl }}</a></p>
    <p v-if="error">Error: {{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      longUrl: '',
      shortUrl: null,
      error: null,
    };
  },
  methods: {
    async shortenLink() {
      try {
        const response = await fetch(process.env.API_URL + '/links', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ longUrl: this.longUrl }),
        });

        if (!response.ok) {
          const message = await response.text()
          throw new Error(`HTTP error! status: ${response.status}, message: ${message}`);
        }

        const data = await response.json();
        this.shortUrl = data.shortUrl;
        this.error = null;
      } catch (e) {
        this.error = e.message;
        this.shortUrl = null;
      }
    },
  },
};
</script>