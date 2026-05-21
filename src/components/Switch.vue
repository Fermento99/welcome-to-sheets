<script setup lang="ts">
import type { Point } from '@/models/Point';
import { useOriginalSheetStore } from '@/stores/originalSheetStore';
import { useUtilsStore } from '@/stores/utilsStore';
import { computed } from 'vue';

type SwitchType = 'circle' | 'line';
export type SwitchProps = {
  id: string;
  position: Point;
  type: SwitchType;
  size?: Point;
};

const props = defineProps<SwitchProps>();

const ogSheetStore = useOriginalSheetStore();
const utilsStore = useUtilsStore();

const fieldValue = computed(() => ogSheetStore.getField(props.id));

const handleClick = () => {
  ogSheetStore.handleFieldChange(props.id, !fieldValue.value);
};

const defaultHeight = props.type === 'circle' ? 20 : 80;
const defaultWidth = props.type === 'circle' ? 20 : 6;

const switchStyles = computed(() => ({
  top: `${props.position.y}px`,
  left: `${props.position.x}px`,
  height: `${props.size?.y ?? defaultHeight}px`,
  width: `${props.size?.x ?? defaultWidth}px`,
  background: fieldValue.value || utilsStore.isHighlightClickableAreas ? 'black' : 'transparent',
  opacity: utilsStore.isHighlightClickableAreas ? (fieldValue.value ? '0.8a' : '0.5') : '1',
  borderRadius: props.type === 'circle' ? '50%' : 0,
}));
</script>

<template>
  <div class="switch" :id="id" :style="switchStyles" @click="handleClick"></div>
</template>

<style lang="css" scoped>
.switch {
  position: absolute;
  cursor: pointer;
}
</style>
