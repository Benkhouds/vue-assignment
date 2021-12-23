<template>
  <div>
    <Spinner v-if="isLoading" />
    <div class="container" v-if="!isLoading && country">
      <div class="btn" @click="goBack">
        <fa-icon :icon="['fas', 'arrow-left']" class="icon"></fa-icon>
        <span>Back</span>
      </div>
      <div class="country-details">
        <div class="left">
          <img :src="country.flags.png" alt="country flag" />
        </div>
        <div class="right">
          <div>
            <h3>{{ country.name.common }}</h3>
            <p>
              <span>Official Name: </span>
              {{ country.name.official }}
            </p>
            <p><span>Population: </span> {{ population }}</p>
            <p><span>Region: </span> {{ country.region }}</p>
            <p><span>Sub Region: </span> {{ country.subregion }}</p>
            <p>
              <span>Capital: </span>
              {{ country?.capital[0] || country.name.common }}
            </p>
          </div>
          <div>
            <p><span>Currencies: </span> {{ currencies }}</p>
            <p><span>Languages: </span> {{ languages }}</p>
            <p>
              <span>Location: </span>
              <a :href="country.maps.googleMaps">Click To View</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/config';
import Spinner from '@/components/Spinner';

export default {
  name: 'CountryDetails',
  components: {
    Spinner
  },
  data() {
    return {
      isLoading: false,
      country: null
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  async mounted() {
    this.isLoading = true;
    try {
      const countryCode = this.$route.params.countryCode;
      const {
        data: [country]
      } = await axios.get('/alpha/' + countryCode);
      console.log(country);
      this.country = country;

      /* next((component) => {
        component.country = country;
      }); */
    } catch (err) {
      console.log(err);
    } finally {
      this.isLoading = false;
    }
  },
  computed: {
    population() {
      return this.country.population
        ? this.country.population
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        : '';
    },
    currencies() {
      return Object.values(this.country.currencies)
        .map((c) => c.name)
        .join(',');
    },
    languages() {
      return Object.values(this.country.languages).join(',');
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 1.5rem 2rem;
}

.btn {
  background-color: var(--clr-elements);
  color: var(--clr-text);
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: auto;
  padding: 0.3rem 1.5rem;
  margin-bottom: 4rem;
  box-shadow: 1px 1px 5px var(--clr-box-shadow);
}

.btn span {
  padding-left: 0.5rem;
}

.icon {
  color: var(--clr-text);
}

img {
  width: 100%;
  margin-bottom: 2rem;
}

h3,
p {
  line-height: 2.5rem;
}

h3 {
  font-size: 1.8rem;
  font-weight: var(--fw-bold);
  margin-bottom: 0.5rem;
}

p {
  font-size: var(--fs-details);
}
span {
  font-weight: var(--fw-medium);
}

@media (min-width: 1440px) {
  .container {
    padding: 2rem 4rem;
  }

  .country-details {
    display: flex;
    justify-content: space-between;
    width: 80%;
  }

  .left {
    width: 40%;
  }

  .right {
    width: 60%;
    margin-left: 6rem;
  }
  .right > div:nth-child(2) {
    margin-top: 1rem;
  }
}
</style>
