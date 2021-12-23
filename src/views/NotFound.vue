<template>
  <div>
    <h1>Oops!</h1>
    <h3>The resource you're looking for is not here.</h3>
    <router-link :to="{ name: 'Home' }">Back to the home page</router-link>
  </div>
</template>
<style scoped>
div {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
