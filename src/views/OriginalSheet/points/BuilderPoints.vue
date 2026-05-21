<script setup lang="ts">
import Input from '@/components/Input.vue';
import Circle from '@/components/Circle.vue';
import { SUM_ROW_Y } from './constants';
import type { Point } from '@/models/Point';
import { generateLine } from '@/utils/gridGenerators';
const START_Y = 514;

const generateBuilders = (startingPoint: Point, count: number) =>
  generateLine(startingPoint, { x: 0, y: 28 }, count);

const builders = [
  generateBuilders({ y: START_Y, x: 230 }, 4),
  generateBuilders({ y: START_Y + 14, x: 245 }, 3),
  generateBuilders({ y: START_Y, x: 260 }, 4),
];
</script>

<template>
  <template v-for="(column, columnIndex) in builders">
    <Circle
      v-for="(position, index) in column"
      :id="`builder-circle-${columnIndex}-${index}`"
      :position="position"
    />
  </template>
  <Input id="builders-points_sum" :position="{ x: 237, y: SUM_ROW_Y }" />
</template>
