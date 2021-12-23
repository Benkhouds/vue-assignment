<template>
  <div v-if="country" class="container">
    <router-link :to="'/country/' + country.cca2">
      <div class="flag">
        <img :src="country.flags.png" alt="country flag" />
      </div>
      <div class="details">
        <h3>{{ country.name.common }}</h3>
        <p><span>Population:</span> {{ populationFormat }}</p>
        <p><span>Region:</span> {{ country.region }}</p>
        <p><span>Capital:</span> {{ capital }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CountryCard',
  props: ['country'],
  computed: {
    populationFormat() {
      return this.country.population
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    capital() {
      if (!this.country.capital) {
        return this.country.name.common;
      }
      return this.country.capital[0];
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  height: 100%;
}
.container {
  cursor: pointer;
  width: 80%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: var(--clr-elements);
  margin: 0 auto 2rem;
  box-shadow: 0 1px 3px var(--clr-box-shadow);
}
.flag {
  height: 50%;
  overflow: hidden;
}
.flag img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.details {
  height: 200px;
  padding: 1.5rem 2rem;
}

.details h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: var(--fw-bold);
}

.details span {
  font-weight: var(--fw-medium);
}

.details p {
  padding-block: 0.2rem;
}

@media (min-width: 1440px) {
  .container {
    width: 100%;
  }
}
</style>
