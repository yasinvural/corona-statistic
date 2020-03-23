<template>
  <div class="country-container">
    <a-collapse
      v-model="activeKey"
      accordion
      v-for="country in currentCountryList"
      :key="country"
      class="country-collapse-container"
      @change="handleCountryClick(country)"
    >
      <a-collapse-panel :header="country" :key="country">
        <Loading v-if="isLoading" />
        <Statistic v-else :countryData="countryData" />
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
import Statistic from "./Statisctic";
import Loading from "./Loading";

export default {
  name: "Country",
  props: {
    currentCountryList: Array,
    countryData: Object,
    isLoading: Boolean
  },
  data() {
    return {
      activeKey: null
    };
  },
  methods: {
    handleCountryClick(key) {
      if (key === this.activeKey) this.$emit("handleCountryChange", key);
    }
  },
  watch: {
    activeKey(key) {
      console.log(key);
    }
  },
  components: {
    Statistic,
    Loading
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
