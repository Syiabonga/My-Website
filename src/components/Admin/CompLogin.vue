<template>
    <form @submit.prevent="signin">
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input
    type="email"
    class="form-control"
    v-model="email"
     placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input
    type="password"
     v-model="password"
    class="form-control"
     placeholder="Password">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  created() {
    this.checkSignedIn();
  },
  updated() {
    this.checkSignedIn();
  },
  methods: {
    signin() {
      axios.post('http://localhost:3000/users/login',
        {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          this.signinSuccessful(response);
        })
        .catch((error) => {
          this.signinFailed(error);
        });
    },
    signinSuccessful(response) {
      if (!response.data.auth_token) {
        this.signinFailed(response);
        return;
      }
      localStorage.auth_token = response.data.auth_token;
      localStorage.signedIn = true;
      this.error = '';
      this.$router.replace('/dash');
    },
    signinFailed(error) {
      this.error = (error.response && error.response.data && error.response.data.error) || '';
      delete localStorage.auth_token;
      delete localStorage.signedIn;
    },
    checkSignedIn() {
      if (localStorage.signedIn) {
        this.$router.replace('/');
      }
    },
  },
};
</script>
<style scoped>

</style>
