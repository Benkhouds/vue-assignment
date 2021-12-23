<template>
  <div class="container">
    <form class="search-field" @submit.prevent="handleSubmit">
      <input v-model="value" type="text" placeholder="Type to search.." />
    </form>
    <div class="items" v-show="open">
      <div v-if="isLoading">Loading...</div>

      <router-link
        :to="country.path"
        v-for="(country, index) in results"
        :key="index"
        @click="navigateToCountry(country)"
      >
        {{ country.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce';
import axios from '@/config';
export default {
  data() {
    return {
      value: '',
      open: false,
      results: [],
      isLoading: false
    };
  },
  watch: {
    value(...args) {
      this.debouncedWatch(...args);
    }
  },
  methods: {
    async fetchData(value) {
      try {
        const { data } = await axios.get('/name/' + value);
        this.results = data.map((a) => ({
          name: a.name.common,
          path: '/country/' + a.cca2
        }));
      } catch (err) {
        console.log(err);
        this.open = false;
      }
    },
    navigateToCountry(countryName) {
      console.log(countryName);
    }
  },
  created() {
    this.debouncedWatch = debounce(async (searchValue) => {
      if (!searchValue.trim()) {
        this.open = false;
      } else {
        this.results = [];
        this.open = true;
        this.isLoading = true;
        await this.fetchData(searchValue);
        this.isLoading = false;
      }
    }, 500);
  },
  beforeUnmount() {
    this.debouncedWatch.cancel();
  }
};
</script>

<style scoped>
.container {
  position: relative;
}
.search-field input {
  padding: 0.8rem 0.6rem;
  width: 300px;
  border-radius: 10px;
  border: none;
  outline: none;
  color: var(--clr-text);
  box-shadow: 0 1px 3px var(--clr-box-shadow);
}
.search-field input:focus {
  outline: none;
  border-color: rgb(90, 85, 85);
}
.items {
  color: var(--clr-text);
  border-radius: 6px;
  overflow: hidden;
  position: absolute;
  background-color: var(--clr-elements);
  top: 4rem;
  left: 0;
  right: 0;
  z-index: 10;
  overflow-y: scroll;
  max-height: 160px;
}
.items::-webkit-scrollbar {
  width: 8px;
}
.items::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.items::-webkit-scrollbar-thumb {
  background: #888;
}
.items div {
  padding: 0.6rem 1rem;
}
.items a {
  display: block;
  text-decoration: none;
  font-weight: var(--fw-medium);
  color: var(--clr-text);
  padding: 0.6rem 1rem;
  cursor: pointer;
}
.items a:hover {
  background: rgb(204, 204, 204);
}
</style>
