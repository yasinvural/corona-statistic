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
        <a-row type="flex" justify="center" align="middle">
          <a-col :span="8" type="flex" justify="center" align="middle">
            <h4>CONFIRMED</h4>
            <span class="confirmed">{{countryData && countryData.confirmed}}</span>
          </a-col>
          <a-col :span="8" type="flex" justify="center" align="middle">
            <h4>DEATHS</h4>
            <span class="deaths">{{countryData && countryData.deaths}}</span>
          </a-col>
          <a-col :span="8" type="flex" justify="center" align="middle">
            <h4>RECOVERED</h4>
            <span class="recovered">{{countryData && countryData.recovered}}</span>
          </a-col>
        </a-row>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
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
      this.$emit("handleCountryChange", key);
    }
  },
  watch: {
    activeKey(key) {
      console.log(key);
    }
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
.confirmed {
  color: gray;
  font-size: 24px;
  font-weight: bold;
}
.deaths {
  color: red;
  font-size: 24px;
  font-weight: bold;
}
.recovered {
  color: green;
  font-size: 24px;
  font-weight: bold;
}
</style>
