<script>

import axios from 'axios'
const url = 'http://127.0.0.1:3000'

export default{
  data() {
    return {
      searchText: '',
      users: []
    }
  },
  methods: {
    async searchUser() {
      
    },
    async getAllUsers() {
      await axios.get(`${url}/users`).then((res) => {
        this.users = res.data
      })
    },
    async importUsers() {
      await axios.get(`${url}/users`).then((res) => {
        this.users = this.users.concat(res.data)
      })
    },
    async handleDeleteUser(id) {
      await axios.delete(`${url}/users/${id}`).then(() => {
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
        <div style="border: rgba(0,0,0,0.07) 2px solid">
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
              <td v-if="user.id">
                <router-link :to="{name: 'EditUser', params: {id: user.id}}" class="btn btn-sm btn-primary">Edit</router-link>
                <button class="btn btn-sm btn-danger" style="margin-left: 2px;" @click="handleDeleteUser(user.id)">Delete</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-2">
        <h1>Options</h1>
        <div class="row">
          <input v-model="searchText" type="text" placeholder="Search by name..." />
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