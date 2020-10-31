import Vue from 'vue';
import VueRouter from 'vue-router';
import Create from '../components/Create.vue';
import Join from '../components/Join.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/create', name: 'create', component: Create
        },
        {
            path: '/join', name: 'join', component: Join
        }
    ]
});


export default router; 