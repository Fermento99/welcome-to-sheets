<script setup lang="ts">
import type { Point } from '@/models/Point';
import { useOriginalSheetStore } from '@/stores/originalSheetStore';
import { computed } from 'vue';

const props = defineProps<{
  id: string;
  position: Point;
  size?: Point;
}>();

const store = useOriginalSheetStore();

const fieldValue = computed(() => store.getField(props.id));

const handleClick = () => {
  store.handleFieldChange(props.id, !fieldValue.value);
};

const lineStyles = computed(() => ({
  top: `${props.position.y}px`,
  left: `${props.position.x}px`,
  height: `${props.size?.y ?? 80}px`,
  width: `${props.size?.x ?? 6}px`,
  background: fieldValue.value ? 'black' : 'transparent',
}));
</script>

<template>
  <div class="cross" :id="id" :style="lineStyles" @click="handleClick"></div>
</template>

<style lang="css" scoped>
.cross {
  position: absolute;
  cursor: pointer;
}
</style>
