<script>
import axios from "axios";
import router from "@/routes/index.js";

const url = 'http://127.0.0.1:3000/users'

export default {
  name: "AddUser",
  data() {
    return {
      localUser: {id: '', name: '', email: '', password: ''}
    }
  },
  methods: {
    handleAddUser() {
      console.log(this.localUser.id)
      axios.post(`${url}/users`, this.localUser).then(() => {
        console.log("User added successfully")
        alert("New user added successfully")
        router.push("/list")
      }).catch((err) => {
        console.log(err);
      })
    },
    async setUserId() {
      let id = ''
      await axios.get(`${url}/users`)
          .then((res) => {
            id = parseInt(res.data.reverse()[0].id) + 1
            console.log(`User id: ${res.data.reverse()[0].id}`)
            this.localUser.id = id.toString()
          })
    }
  },
  beforeMount() {
    this.setUserId()
  }
}
</script>

<template>
  <div class="container">
    <h1>Add an user</h1>
    <form @submit.prevent="handleAddUser">
      <input v-model="localUser.name" type="text" class="input-group-text form-check-inline mb-3" style="width: 50%"
             placeholder="Enter your name" required/>
      <input v-model="localUser.email" type="text" class="input-group-text form-check-inline mb-3" style="width: 50%"
             placeholder="Enter your email" required/>
      <input v-model="localUser.password" type="password" minlength="8" class="input-group-text form-check-inline mb-3"
             style="width: 50%" placeholder="Enter your password" required/>

      <button type="submit" class="btn btn-success">Add new user</button>
    </form>


  </div>
</template>

<style scoped>

</style>