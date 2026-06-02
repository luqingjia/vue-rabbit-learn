<script setup lang="ts"></script>

<template>
  <!-- 一级路由出口 -->
  <RouterView />
  <div class="test">test scss</div>
</template>

<style scoped lang="scss">
.test {
  color: $priceColor;
}
</style>
