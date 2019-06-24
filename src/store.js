import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
        user: null,
        access: null
    },

    getters: {
    },

    mutations: {
        setUser (state, user) {
            state.user = user;
        },
        setAccess (state, access) {
            state.access = access;
        }
    },

    actions: {

    }
});