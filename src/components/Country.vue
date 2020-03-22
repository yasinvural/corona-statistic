<template>
  <div class="country-container">
    <a-collapse
      v-for="country in currentCountryList"
      :key="country"
      class="country-collapse-container"
    >
      <a-collapse-panel :header="country" key="{{country}}">
        <p>This are will be implemented</p>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
export default {
  name: "Country",
  props: {
    currentCountryList: Object
  }
};
</script>

<style scoped>
.country-container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.country-collapse-container {
  margin: 0.5rem 0;
}
</style>
