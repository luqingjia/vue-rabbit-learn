<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <!-- 测试面板组件 -->
  <HomePanal title="新鲜好物" sub-title="新鲜好物 好多商品">
    <div>我是新鲜好物</div>
  </HomePanal>
  <HomePanal title="人气推荐" sub-title="人气推荐 好多商品">
    <div>我是人气推荐</div>
  </HomePanal>
</template>

<script setup lang="ts">
import HomeProduct from "./components/HomeProduct.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeCategory from "./components/HomeCategory.vue";
import HomeHot from "./components/HomeHot.vue";
import HomePanal from "./components/HomePanal.vue";
</script>
