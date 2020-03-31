<template>
    <div>
        <h1>DASHBOARD</h1>
        <a href="#" @click.prevent="signOut">Log out</a>
    </div>
</template>
<script>
export default {
  name: 'Dash',
  methods: {
    setError(error, text) {
      this.error = (error.response && error.response.data && error.response.data.error) || text;
    },
    signedIn() {
      return localStorage.signedIn;
    },
    signOut() {
      delete localStorage.auth_token;
      delete localStorage.signedIn;
      this.$router.replace('/');
    },
  },
};
</script>
<style scoped>

</style>
