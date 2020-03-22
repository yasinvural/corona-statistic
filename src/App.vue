<template>
  <div id="app">
    <Header :generalInfo="generalInfo" />
    <Alphabet
      :selectedChar="selectedChar"
      @handleSelectedCharChange="handleSelectedCharChange($event)"
    />
    <Country :currentCountryList="currentCountryList" />
  </div>
</template>

<script>
const BASEURL = "https://covid19.mathdro.id/api/";

import axios from "axios";
import Header from "./components/Header.vue";
import Alphabet from "./components/Alphabet.vue";
import Country from "./components/Country.vue";
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
      countries: {},
      selectedChar: "A"
    };
  },
  methods: {
    handleSelectedCharChange(char) {
      this.selectedChar = char;
    }
  },
  computed: {
    currentCountryList() {
      const countryList = Object.keys(this.countries);
      const currentList = countryList.filter(country =>
        country.startsWith(this.selectedChar)
      );
      return currentList;
    }
  },
  components: {
    Header,
    Alphabet,
    Country
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
