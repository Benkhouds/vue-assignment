<template>
  <div class="main-container">
    <div class="header">
      <SearchField />
      <div class="dropdown-container">
        <Sort @sortActive="sort = true" />
        <Filter
          @filterActive="filter = true"
          @filterInactive="filter = false"
        />
      </div>
    </div>
    <Spinner :status="isLoading" v-show="isLoading" />
    <div class="total-countries">
      <span>{{ countries.length }} out of 250</span>
    </div>
    <div v-if="countries" class="country-container">
      <CountryCard
        v-for="(country, index) in countries"
        :key="index"
        :country="country"
      />
    </div>
  </div>
</template>

<script>
import SearchField from '@/components/SearchField';
import Filter from '@/components/Filter';
import Sort from '@/components/Sort';
import Spinner from '@/components/Spinner';
import CountryCard from '@/components/CountryCard';

export default {
  name: 'Home',
  components: {
    SearchField,
    Filter,
    Sort,
    Spinner,
    CountryCard
  },
  data() {
    return {
      filter: false,
      sort: false
    };
  },
  computed: {
    selectedOrder() {
      return this.$store.getters.selectedOrder;
    },
    countries() {
      if (this.filter || this.sort) {
        return this.$store.getters.computedCountries;
      }
      return this.$store.getters.countries;
    },
    isLoading() {
      return !this.countries.length ? this.$store.getters.isLoading : false;
    }
  },

  created() {
    //fetching data only when the application is first created
    //the data is only re-fetched on reload
    console.log('home created');
    if (!this.$store.getters.countries.length) {
      this.$store.dispatch('fetchAllCountries');
    }
  }
};
</script>

<style scoped>
* {
  font-size: var(--fs-homepage);
}
.total-countries {
  margin: 1rem 0;
}
.total-countries span {
  font-weight: var(--fw-medium);
}
.main-container {
  padding: 0 2rem;
}
.header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
}
.country-container {
  display: flex;
  padding: 1rem 0;
  flex-direction: column;
}
@media (min-width: 800px) {
  .main-container {
    padding: 0 5rem;
  }
  .country-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1440px) {
  .country-container {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
  .header {
    margin: 1rem 0 0;
  }
  .dropdown-container {
    display: flex;
    width: 30%;
  }
}
</style>
