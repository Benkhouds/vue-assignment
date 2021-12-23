<template>
  <div class="container">
    <h2>Countries Api</h2>
  </div>
</template>

<style scoped>
.container {
  background-color: var(--clr-elements);
  box-shadow: 0 1px 3px var(--clr-box-shadow);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem;
}

h2,
span {
  font-size: 0.875rem;
}

@media (min-width: 1440px) {
  .container {
    padding-inline: 4rem;
  }

  h2 {
    font-size: 1.1rem;
  }
}
</style>
