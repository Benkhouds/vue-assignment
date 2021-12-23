import { createStore } from 'vuex';
import axios from '@/config';
export default createStore({
  state: {
    countries: [],
    selectedOrder: null,
    selectedRegion: '',
    regions: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
    sortOptions: {
      'Biggest Population': {
        orderBy: 'population',
        orderDirection: 'desc'
      },
      'Smallest Population': {
        orderBy: 'population',
        orderDirection: 'asc'
      },
      'A-Z': {
        orderBy: 'name',
        orderDirection: 'asc'
      },
      'Z-A': {
        orderBy: 'name',
        orderDirection: 'desc'
      }
    },
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
    setSelectedOrder(state, payload) {
      state.selectedOrder = payload;
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
    computedCountries: (state) => {
      let results = [...state.countries];
      if (state.selectedRegion) {
        results = results.filter(
          ({ region }) => region === state.selectedRegion
        );
      }
      //sort is not optimized (condition inside sort )
      //but i did it in the simplest way
      if (state.selectedOrder) {
        if (state.selectedOrder.orderBy === 'name') {
          results.sort((a, b) => {
            if (state.selectedOrder.orderDirection === 'asc') {
              return a.name.common.localeCompare(b.name.common);
            } else {
              return b.name.common.localeCompare(a.name.common);
            }
          });
        } else if (state.selectedOrder.orderBy === 'population') {
          results.sort((a, b) => {
            if (state.selectedOrder.orderDirection === 'asc') {
              return a.population - b.population;
            } else {
              return b.population - a.population;
            }
          });
        }
      }
      return results;
    },
    regions: (state) => state.regions,
    sortOptions: (state) => state.sortOptions,
    selectedOrder: (state) => state.selectedOrder,
    isLoading: (state) => state.isLoading,
    error: (state) => state.error
  }
});
