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
}));

const switchClasses = computed(() => {
  const classes = [
    `switch_${props.type}`,
    `switch_${fieldValue.value ? 'on' : 'off'}`,
    utilsStore.isHighlightClickableAreas ? 'switch_highlighted' : undefined,
  ];

  return classes.filter((className) => className !== undefined).join(' ');
});
</script>

<template>
  <div
    class="switch"
    :class="switchClasses"
    :id="id"
    :style="switchStyles"
    @click="handleClick"
  ></div>
</template>

<style lang="css" scoped>
.switch {
  position: absolute;
  cursor: pointer;
}

.switch_circle {
  border-radius: 50%;
}

.switch_on {
  background: #1e2019;
}

.switch_off {
  background: transparent;
}

.switch_highlighted.switch_on {
  background: #1e2019;
  opacity: 0.8;
}

.switch_highlighted.switch_off {
  background: #394032;
  opacity: 0.5;
}
</style>
