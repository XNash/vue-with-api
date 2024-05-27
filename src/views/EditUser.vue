<script>
import axios from "axios";
import router from "@/routes/index.js";

export default {
  name: "EditUser",
  props: {
    id: {
      required: true
    }
  },
  data() {
    return {
      user: {id: '', name:'', email:'', password:''}
    }
  },
  methods: {
    async getTargetedUser() {
      await axios.get(`http://127.0.0.1:3000/users/${this.id}`).then((res) => {
        this.user = res.data
        console.log(this.id)
      })
    },
    async updateTargetUser() {
      console.log(this.id)
      this.user.id = this.id;
      console.log(this.user)
      await axios.put(`http://127.0.0.1:3000/users/${this.id}`, this.user).then(() => {
        alert("user updated successfully")
        router.push("/list")
      })
    }
  },
  beforeMount() {
    this.getTargetedUser()
  }
}
</script>

<template>
<div class="container">
  <h1>Edit an user</h1>
  <form @submit.prevent="updateTargetUser">
    <input v-model="user.name" type="text" class="input-group-text form-check-inline mb-3" style="width: 50%" placeholder="Enter your name" required />
    <input v-model="user.email" type="text" class="input-group-text form-check-inline mb-3" style="width: 50%" placeholder="Enter your email" required />
    <input v-model="user.password" type="password" minlength="8" class="input-group-text form-check-inline mb-3" style="width: 50%" placeholder="Enter your password" required />

    <button type="submit" class="btn btn-success">Save changes</button>
  </form>


</div>
</template>

<style scoped>

</style>