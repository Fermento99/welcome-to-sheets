<script setup lang="ts">
import type { Point } from '@/models/Point';

const props = defineProps<{
  id: string;
  position: Point;
  size?: number;
}>();

const inputStyles = {
  width: `${props.size ?? 32}px`,
  top: `${props.position.y}px`,
  left: `${props.position.x}px`,
};
</script>

<template>
  <input :style="inputStyles" :id="id" />
</template>

<style lang="css" scoped>
input {
  border: solid 1px black;
  border-radius: 4px;
  position: absolute;
}
</style>
