<template>
  <div id="app">
    <Header :generalInfo="generalInfo" />
    <Alphabet
      :selectedChar="selectedChar"
      @handleSelectedCharChange="handleSelectedCharChange($event)"
    />
    <Country
      :isLoading="isLoading"
      :currentCountryList="currentCountryList"
      :countryData="countryData"
      @handleCountryChange="handleCountryChange($event)"
    />
  </div>
</template>

<script>
const BASEURL = "https://covid19.mathdro.id/api/";

import axios from "axios";
import Header from "./components/Header.vue";
import Alphabet from "./components/Alphabet.vue";
import Country from "./components/Country.vue";
import { message } from "ant-design-vue";
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
      countryData: null,
      selectedChar: "A",
      isLoading: false
    };
  },
  methods: {
    handleSelectedCharChange(char) {
      this.selectedChar = char;
    },
    async handleCountryChange(country) {
      const countryLabel = this.countries[country];
      try {
        this.isLoading = true;
        const result = await axios.get(`${BASEURL}countries/${countryLabel}`);
        const { data } = result;
        const { confirmed, recovered, deaths } = data;
        const tempObj = {
          confirmed: confirmed.value,
          recovered: recovered.value,
          deaths: deaths.value
        };
        this.countryData = tempObj;
        this.isLoading = false;
      } catch (err) {
        this.isLoading = false;
        message.error("Country data not found!");
        this.countryData = null;
      }
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
