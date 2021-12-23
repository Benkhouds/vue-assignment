import { createStore } from 'vuex';
import axios from '@/config';
export default createStore({
  state: {
    countries: [],
    orderBy: '',
    orderDirection: '',
    selectedRegion: '',
    regions: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
    isLoading: false,
    error: ''
  },
  mutations: {
    setAllCountries(state, payload) {
      state.countries = payload;
    },
    setSelectedRegion(state, payload) {
      state.selectedRegion = payload;
    },
    setLoadingStatus(state, payload) {
      state.isLoading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    }
  },
  actions: {
    async fetchAllCountries({ commit }) {
      commit('setLoadingStatus', true);
      try {
        const { data } = await axios.get('/all');
        console.log(data);
        commit('setAllCountries', data);
      } catch (error) {
        commit('setError', 'Error has occurred' + error.message || '');
      } finally {
        commit('setLoadingStatus', false);
      }
    }
  },
  getters: {
    countries: (state) => state.countries,

    regions: (state) => state.regions,
    isLoading: (state) => state.isLoading,
    error: (state) => state.error
  }
});
