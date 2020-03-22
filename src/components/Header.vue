<template>
  <div class="header-container">
    <h2>{{ new Date(generalInfo.lastUpdate) }}</h2>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    generalInfo: Object
  }
};
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ececec;
}
</style>
