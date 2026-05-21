<script setup lang="ts">
const props = defineProps<{ img: string }>();
</script>

<template>
  <div class="sheet-container" :style="{ backgroundImage: `url(${props.img})` }">
    <slot></slot>
  </div>
</template>

<style lang="css">
.sheet-container {
  margin: 16px auto;
  height: 724px;
  width: 721px;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
