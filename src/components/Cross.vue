<script setup lang="ts">
import type { Point } from '@/models/Point';
import { ref } from 'vue';

const props = defineProps<{
  id: string;
  position: Point;
  size?: Point;
}>();

const isOn = ref(true);

const handleClick = () => {
  isOn.value = !isOn.value;
};

const boxStyles = (isOn: boolean) => ({
  top: `${props.position.y}px`,
  left: `${props.position.x}px`,
  height: `${props.size?.y ?? 20}px`,
  width: `${props.size?.x ?? 20}px`,
  background: isOn ? 'black' : 'transparent',
});
</script>

<template>
  <div class="cross" :id="id" :style="boxStyles(isOn)" @click="handleClick"></div>
</template>

<style lang="css" scoped>
.cross {
  position: absolute;
  cursor: pointer;
  border-radius: 50%;
}
</style>
