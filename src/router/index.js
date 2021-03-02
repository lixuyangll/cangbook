import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/Index'
import Focus from '../pages/Focus'
import TogeRead from '../pages/TogeRead'
import Topic from '../pages/Topic'

Vue.use(VueRouter)

let routes = [
    {
        path:'/',
        component:Index
    },
    {
        path:'/Focus',
        component:Focus
    },
    {
        path:'/TogeRead',
        component:TogeRead
    },
    {
        path:'/Topic',
        component:Topic
    }
]

export default new VueRouter({
    routes
})