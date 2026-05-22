<script setup lang="ts">
import type { Point } from '@/models/Point';
import { useBoardStateStore } from '@/stores/boardStateStore';
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

const ogSheetStore = useBoardStateStore();
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
  --background-color: #1e2019;
  position: absolute;
  cursor: pointer;
}

.switch_circle {
  border-radius: 50%;
}

.switch_on {
  background: var(--background-color);
}

.switch_off {
  background: transparent;
}

.switch_highlighted {
  opacity: 0.6;
}

.switch_highlighted.switch_off {
  background: repeating-linear-gradient(
    135deg,
    var(--background-color),
    var(--background-color) 3px,
    transparent 3px,
    transparent 6px
  );
  border: var(--background-color) 2px solid;
}
</style>
