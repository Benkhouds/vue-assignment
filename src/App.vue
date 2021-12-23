<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;800&display=swap');

*,
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--ff-default);
}

body {
  width: 100%;
  height: 100vh;
  background-color: var(--clr-bg);
}

:root {
  /*==== COLOR VARIABLES===*/
  --clr-text: hsl(210, 10%, 8%);
  --clr-input: hsl(0, 0%, 58%);
  --clr-input-hover: hsla(0, 0%, 52%, 0.2);
  --clr-bg: hsl(0, 0%, 95%);
  --clr-elements: hsl(0, 0%, 100%);
  --clr-box-shadow: hsl(0, 0%, 88%);

  /*==== TYPOGRAPHY VARIABLES===*/
  --fs-homepage: 14px;
  --fs-details: 16px;
  --ff-default: 'Poppins', sans-serif;
  --fw-regular: 400;
  --fw-medium: 600;
  --fw-bold: 800;
}

h1,
h2,
h3,
h4,
span,
p {
  color: var(--clr-text);
}
</style>
