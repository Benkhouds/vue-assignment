<template>
  <div>
    <div class="main-container">
      <!-- Search  -->
      <!-- Sort -->
      <Filter @filterActive="filter = true" />
    </div>
    <Spinner :status="isLoading" v-show="isLoading" />
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
import Filter from '@/components/Filter';
import Spinner from '@/components/Spinner';
import CountryCard from '@/components/CountryCard';

export default {
  name: 'Home',
  components: {
    Filter,
    Spinner,
    CountryCard
  },
  data() {
    return {
      filter: false
    };
  },
  computed: {
    countries() {
      if (this.filter) {
        return this.$store.getters.filteredCountries;
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
.main-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}
.country-container {
  display: flex;
  padding: 1rem 2rem;
  flex-direction: column;
}
@media (min-width: 800px) {
  .country-container {
    display: grid;
    padding: 1rem 5rem;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1440px) {
  .country-container {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
  .main-container {
    margin: 1rem 0 0;
  }
}
</style>
