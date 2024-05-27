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
        this.users = res.data
      })
    },
    async importUsers() {
      await axios.get('http://127.0.0.1:3000/users').then((res) => {
        this.users = this.users.concat(res.data)
      })
    },
    async handleDeleteUser(id) {
      await axios.delete(`http://127.0.0.1:3000/users/${id}`).then(() => {
        console.log("user deleted successfully")
        this.getAllUsers()
      })
    }
  },
  beforeMount() {
    this.getAllUsers()
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10">
        <h1 class="mb-lg-5">List of users</h1>
        <table class="table table-responsive-lg table-striped border-1">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
          <tr v-for="user in users">
            <td>{{ user.id}}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <router-link :to="{name: 'EditUser', params: {id: user.id}}" class="btn btn-sm btn-primary">Edit</router-link>
              <button class="btn btn-sm btn-danger" style="margin-left: 2px;" @click="handleDeleteUser(user.id)">Delete</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-2">
        <h1>Options</h1>
        <div class="row">
          <router-link to="/list/add" class="btn btn-success mb-md-2">Add user</router-link>
          <button class="btn btn-primary" @click="importUsers">Import users</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .btn {
    color: white;
  }
</style>