<template>
  <Dropdown :options="regions" :value="'All'" :callback="selectRegion" />
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
      return ['All', ...this.$store.getters.regions];
    }
  },
  methods: {
    selectRegion(selected) {
      if (selected !== 'All') {
        this.$store.commit('setSelectedRegion', selected);
        this.$emit('filterActive');
      } else {
        this.$store.commit('setSelectedRegion', '');
        this.$emit('filterInactive');
      }
    }
  }
};
</script>
