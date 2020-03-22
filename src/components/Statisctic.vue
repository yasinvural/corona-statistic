<template>
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
</template>

<script>
export default {
  name: "Statistic",
  props: {
    countryData: Object
  }
};
</script>

<style scoped>
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


