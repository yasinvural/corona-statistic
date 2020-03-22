<template>
  <div id="app">
    <Header :generalInfo="generalInfo" />
  </div>
</template>

<script>
const BASEURL = "https://covid19.mathdro.id/api/";

import axios from "axios";
import Header from "./components/Header.vue";
export default {
  name: "App",
  data() {
    return {
      generalInfo: {
        confirmed: null,
        recovered: null,
        deaths: null,
        lastUpdate: null
      },
      countries:{}
    };
  },
  components: {
    Header
  },
  async created() {
    const fetchTotalValues = async () => {
      const result = await axios.get(BASEURL);
      const { data } = result;
      const { confirmed, recovered, deaths, lastUpdate } = data;
      this.generalInfo.confirmed = confirmed.value;
      this.generalInfo.recovered = recovered.value;
      this.generalInfo.deaths = deaths.value;
      this.generalInfo.lastUpdate = lastUpdate;
    };
    const fetchCountries = async () => {
      const result = await axios.get(`${BASEURL}countries`);
      const {
        data: { countries }
      } = result;
      this.countries = countries;
    };
    fetchTotalValues();
    fetchCountries();
  }
};
</script>

<style>
</style>
