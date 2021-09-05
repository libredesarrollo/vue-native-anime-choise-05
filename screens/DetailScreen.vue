<template>
  <view :style="style.container">
    <text :style="style.h1">
      {{ anime.title }}
    </text>

    <view :style="style.hr"></view>

    <image :style="style.image" :source="{ uri: anime.image }" />

    <view :style="style.hr"></view>

    <scroll-view>
      <text>
        {{ anime.description }}
      </text>
    </scroll-view>
  </view>
</template>
<script>

import { style } from "../helpers/style";

export default {
  props: {
    navigation: {
      Object,
    },
  },
  data() {
    return {
      anime: this.navigation.state.params,
      style
    };
  },
};
</script>
<style>

</style>