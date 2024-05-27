import {createRouter, createWebHistory} from "vue-router"
import Home from '@/views/Home.vue'
import List from "@/views/List.vue";
import AddUser from "@/views/AddUser.vue";
import EditUser from "@/views/EditUser.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: '/list',
        name: "List",
        component: List,
    },
    {
        path: '/list/add',
        name: 'AddUser',
        component: AddUser
    },
    {
        path: '/list/edit/:id',
        name: 'EditUser',
        component: EditUser,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router