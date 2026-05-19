<script setup lang="ts">
const props = defineProps<{ img: string }>();

const handleClick = (event: PointerEvent) => {
  const divEl = event.currentTarget as HTMLDivElement;
  console.log(event.clientX - divEl.offsetLeft, event.clientY - divEl.offsetTop);
};
</script>

<template>
  <div
    class="sheet-container"
    :style="{ backgroundImage: `url(${props.img})` }"
    @click="handleClick"
  >
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
