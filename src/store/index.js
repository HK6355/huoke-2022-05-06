import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        token: '',
        network: '',
    },
    mutations: {
        loginSuccess(state, res) {
            state.token = res
        },
        changeNetwork(state, data) {
            state.network = data
        },

    }
})
export default store