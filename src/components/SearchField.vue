<template>
  <form class="search-field" @submit.prevent="handleSubmit">
    <input v-model="value" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.value);
    }
  }
};
</script>

<style scoped>
.search-field input {
  padding: 0.8rem 0.5rem;
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
</style>
