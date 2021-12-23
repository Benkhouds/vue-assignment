<template>
  <div class="dropdown">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" v-show="open">
      <div
        v-for="(option, index) in options"
        :key="index"
        @click="select(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    value: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    callback: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      selected: this.value,
      open: false
    };
  },
  methods: {
    select(option) {
      this.selected = option;
      this.open = false;
      this.callback(this.selected);
    }
  }
};
</script>

<style scoped>
.dropdown {
  position: relative;
  width: 60%;
  margin: 0 auto;
  color: var(--clr-text);
  background-color: var(--clr-elements);
  margin-top: 2rem;
  margin-inline: 1.5rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 1px 3px var(--clr-box-shadow);
  border-radius: 10px;
}

.selected {
  background-color: var(--clr-elements);
  color: var(--clr-text);
  padding-left: 1em;
  cursor: pointer;
  font-weight: var(--fw-medium);
  font-size: 0.75rem;
}

.selected::after {
  position: absolute;
  content: '';
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: var(--clr-input) transparent transparent transparent;
}
.items {
  color: var(--clr-text);
  border-radius: 6px;
  overflow: hidden;
  position: absolute;
  background-color: var(--clr-elements);
  top: 4rem;
  left: 0;
  right: 0;
  z-index: 10;
}

.items div {
  color: var(--clr-text);
  line-height: 2rem;
  padding-left: 2em;
  cursor: pointer;
}

.items div:hover {
  background-color: var(--clr-input-hover);
}

@media (min-width: 1440px) {
  .dropdown {
    width: 15%;
    margin-left: auto;
    margin-right: 4.5rem;
    padding: 1rem 1.5rem;
  }

  .selected::after {
    top: 26px;
  }
}
</style>
