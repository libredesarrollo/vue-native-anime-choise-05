<template>
  <app-navigator></app-navigator>
</template>

<script>
import {
  createAppContainer,
  createStackNavigator,
} from "vue-native-router";

import IndexScreen from "./screens/IndexScreen.vue";
import DetailScreen from "./screens/DetailScreen.vue";

const StackNavigator = createStackNavigator(
  {
    Index: IndexScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: 'Index',
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: { AppNavigator },
}
</script>