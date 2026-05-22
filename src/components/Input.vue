<script setup lang="ts">
import type { Point } from '@/models/Point';
import { useBoardStateStore } from '@/stores/boardStateStore';
import { computed } from 'vue';

const props = defineProps<{
  id: string;
  position: Point;
  size?: number;
}>();

const store = useBoardStateStore();

const fieldValue = computed(() => store.getField(props.id));

const handleChange = (event: Event) => {
  store.handleFieldChange(props.id, (<HTMLInputElement>event.currentTarget).value);
};

const inputStyles = {
  width: `${props.size ?? 32}px`,
  top: `${props.position.y}px`,
  left: `${props.position.x}px`,
};
</script>

<template>
  <input :style="inputStyles" :id="id" :value="fieldValue" @change="handleChange" />
</template>

<style lang="css" scoped>
input {
  border: solid 1px black;
  border-radius: 4px;
  position: absolute;
}
</style>
