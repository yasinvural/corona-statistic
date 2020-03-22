<template>
  <div class="header-container">
    <h2>{{ new Date(generalInfo.lastUpdate) }}</h2>
    <Statistic :countryData="generalInfo" />
  </div>
</template>

<script>
import Statistic from "./Statisctic";

export default {
  name: "Header",
  props: {
    generalInfo: Object
  },
  components: {
    Statistic
  }
};
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: center;
  padding: 1rem;
  border: 1px solid #ececec;
  flex-direction: column;
  text-align: center;
}
</style>
