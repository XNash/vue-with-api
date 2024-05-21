
<template>
  <input v-model="searchText" type="text" class="input" placeholder="Search by name" />

  <div class="row">
    <router-link to="/" class="btn btn-success">Add user</router-link>
    <button class="btn-success" @click="getAllUsers">Import data</button>
  </div>

  <div v-for="user in users">
    <h1 v-html="user.name"></h1>
  </div>

</template>

<script>

import axios from 'axios'

export default{
  data() {
    return {
      searchText: '',
      users: []
    }
  },
  methods: {
    async getAllUsers() {
      await axios.get('http://127.0.0.1:3000/users').then((res) => {
        this.users.push(res.data)
        console.log(this.users)
      })
    }
  }
}
</script>


<style scoped>
  .btn {
    color: white;
  }
</style>