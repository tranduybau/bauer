const state = () => ({
  isLoading: false,
})

const mutations = {
  SET_LOADING: (_state, payload) => (_state.isLoading = payload),
}

const actions = {
  setIsLoading({ commit }, payload) {
    commit('SET_LOADING', payload)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
