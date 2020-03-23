<template>
  <div class="loading-container">
    <div class="loading" />
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading {
  width: 24px;
  height: 24px;
  color: #f56a00;
  position: relative;
  display: inline-block;
  border: 5px solid;
  border-radius: 50%;
  border-right-color: #fde3cf;
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
