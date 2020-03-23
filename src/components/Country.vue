<template>
  <div class="country-container">
    {{activeKey}}
    <a-collapse
      v-model="activeKey"
      accordion
      v-for="country in currentCountryList"
      :key="country"
      class="country-collapse-container"
      @change="handleCountryClick(country)"
    >
      <a-collapse-panel :header="country" :key="country">
        <Statistic :countryData="countryData" />
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
import Statistic from "./Statisctic";

export default {
  name: "Country",
  props: {
    currentCountryList: Array,
    countryData: Object
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
    Statistic
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
