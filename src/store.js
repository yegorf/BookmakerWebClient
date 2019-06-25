import Vuex from 'vuex';
import Vue from 'vue';
import createPersistedState from "vuex-persistedstate";
import Cookies from 'js-cookie';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null,
        access: null,
        event: null
    },

    plugins: [createPersistedState({
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: true }),
            removeItem: key => Cookies.remove(key)
        }
    })],

    mutations: {
        setUser (state, user) {
            state.user = user;
        },
        setAccess (state, access) {
            state.access = access;
        },
        setEvent (state, event) {
            state.event = event;
        }
    },

    getters: {
    },


    actions: {
    }
});

