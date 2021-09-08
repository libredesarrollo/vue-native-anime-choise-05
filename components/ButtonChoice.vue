<template>

    <touchable-opacity :on-press="() => $emit('choise')">
      <text
        :class="animeChoise == index && selected ? 'correct' : ''"
        class="item"
        >{{ title }}</text
      >
    </touchable-opacity>

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      required: false,
      default: false,
    },
    animeChoise: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    /*fun: { //MALA PRACTICA
      type: Function,
      required: true,
    },*/
  },
};
</script>

<style>
.item {
  color: #5d016d;
  border-width: 2px;
  border-color: #5d016d;
  border-radius: 3px;
  padding: 5px;
  font-size: 18px;
  margin-bottom: 5px;
}
.correct {
  background-color: green;
}
</style>