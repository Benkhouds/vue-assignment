<template>
  <Dropdown :options="sortValues" :value="'Sort By'" :callback="selectSort" />
</template>

<script>
import Dropdown from './Dropdown';
export default {
  name: 'Filter',
  components: {
    Dropdown
  },
  computed: {
    sortValues() {
      return Object.keys(this.$store.getters.sortOptions);
    },
    sortOptions() {
      return this.$store.getters.sortOptions;
    }
  },
  methods: {
    selectSort(selected) {
      this.$store.commit('setSelectedOrder', this.sortOptions[selected]);
      this.$emit('sortActive');
    }
  },
  created() {
    console.log('sort created');
    this.$store.commit('setSelectedOrder', null);
  }
};
</script>
