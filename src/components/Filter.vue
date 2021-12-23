<template>
  <Dropdown
    :options="regions"
    :value="'Filter By Region'"
    :callback="selectRegion"
  />
</template>

<script>
import Dropdown from './Dropdown';
export default {
  name: 'Filter',
  components: {
    Dropdown
  },
  computed: {
    regions() {
      return this.$store.getters.regions;
    }
  },
  methods: {
    selectRegion(region) {
      this.$store.commit('setSelectedRegion', region);
      this.$emit('filterActive');
    }
  }
};
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 60%;
  margin: 0 auto;
  color: var(--clr-text);
  background-color: var(--clr-elements);
  margin-top: 2rem;
  margin-inline: 1.5rem;
  padding: 0.8rem 1.5rem;
  box-shadow: 0 1px 3px var(--clr-box-shadow);
  border-radius: 10px;
  text-align: left;
  outline: none;
  line-height: 1.5rem;
}

.custom-select .selected {
  background-color: var(--clr-elements);
  color: var(--clr-lm-text);
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
  font-weight: var(--fw-semi-bold);
  font-size: 0.875rem;
}

.custom-select .selected::after {
  position: absolute;
  content: '';
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: var(--clr-input) transparent transparent transparent;
}

.custom-select .items {
  color: var(--clr-text);
  border-radius: 6px;
  overflow: hidden;
  position: absolute;
  background-color: var(--clr-elements);
  top: 4rem;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: var(--clr-text);
  line-height: 2rem;
  padding-left: 2em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: var(--clr-input-hover);
}

@media (min-width: 1440px) {
  .custom-select {
    width: 15%;
    margin-left: auto;
    margin-right: 4.5rem;
    padding: 1rem 1.5rem;
  }

  .custom-select .selected::after {
    top: 26px;
  }
}
</style>
