<template>
  <view :style="style.container">
    <text :style="style.h1">Listado de Anime</text>
    <view :style="style.hr"></view>

    <view
      v-if="animes.length == 0"
      :style="{ flex: 1, justifyContent: 'center' }"
    >
      <activity-indicator size="large" color="#8f04a8" />
    </view>

    <scroll-view :style="{ marginBottom: 10 }">
      <image
        :style="style.image"
        v-if="animes.length > 0"
        :source="{ uri: animes[animeChoise].image }"
      />

      <view
        v-for="(a,k) in animes"
        :key="a.id"
        :style="{ flex: 1, flexDirection: 'row' }"
      >
        <touchable-opacity v-if="selected"
          :on-press="() => goToDetail(a)"
          :style="{ marginRight: 5 }"
        >
          <text class="item">Ver</text>
        </touchable-opacity>

        <ButtonChoice
          :title="a.title"
          :selected="selected"
          :animeChoise="animeChoise"
          :index="k"
          @choise="choise"
        ></ButtonChoice>
      </view>

    </scroll-view>
  </view>
</template>

<script>
import { getAnimes, randomCount } from "../helpers/animeRandom";
import { style } from "../helpers/style";

import ButtonChoice from "../components/ButtonChoice"

export default {
  /*async*/ created() {
    this.generateRandomAnime();
    //this.animes = await getAnime()
    // getAnimes().then((data) => (this.animes = data));

    //console.log(this.animes[1].title)
  },
  components:{
    ButtonChoice
  },
  props: {
    navigation: {
      Object,
    },
  },
  data() {
    return {
      animes: [],
      animeChoise: -1,
      selected:false,
      style,
    };
  },
  methods: {
    goToDetail: function (anime) {
      this.navigation.navigate("Detail", anime);
    },
    generateRandomAnime: async function () {
      // TODO opcion de nuestro usuario
      this.animes = await getAnimes();
      this.animeChoise = randomCount();
    },
    choise: async function () {
      this.selected = true;
      
      s = this
      setTimeout(() => {
        s.generateRandomAnime()
        s.selected = false;
      }, 2000)

      
    }
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