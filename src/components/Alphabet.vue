<template>
  <div class="alphabet-container">
    <a-avatar
      shape="square"
      v-for="char in list"
      :style="char.selected ?  'color: #f56a00; backgroundColor: #fde3cf' : ''"
      :key="char.key"
      @click="handleAvatarClick(char.key)"
    >{{char.key}}</a-avatar>
  </div>
</template>

<script>
export default {
  name: "Alphabet",
  props: {
    selectedChar: String
  },
  data() {
    return {
      list: []
    };
  },
  methods: {
    handleAvatarClick(char) {
      this.$emit("handleSelectedCharChange", char);
    },
    createListAndUpdateSelectedChar() {
      const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
      this.list = alphabet.split("").map(char => {
        if (char === this.selectedChar) {
          return {
            key: char,
            selected: true
          };
        } else {
          return {
            key: char,
            selected: false
          };
        }
      });
    }
  },
  created() {
    this.createListAndUpdateSelectedChar();
  },
  watch: {
    selectedChar() {
      this.createListAndUpdateSelectedChar();
    }
  }
};
</script>

<style scoped>
.alphabet-container {
  display: flex;
  justify-content: space-around;
}
</style>
