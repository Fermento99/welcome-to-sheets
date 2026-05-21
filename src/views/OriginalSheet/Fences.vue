<script setup lang="ts">
import type { Point } from '@/models/Point';
import { generateLine } from '@/utils/gridGenerators';
import Line from '@/components/Line.vue';

const generateFenceRow = (startingPoint: Point, count: number) =>
  generateLine(startingPoint, { y: 0, x: 50.4 }, count, { y: 8, x: 0 });

const houses = [
  generateFenceRow({ y: 56, x: 210 }, 9),
  generateFenceRow({ y: 192, x: 160 }, 10),
  generateFenceRow({ y: 326, x: 110 }, 11),
];
</script>

<template>
  <div>
    <div v-for="(row, rowIndex) in houses">
      <Line
        v-for="(position, houseIndex) in row"
        :id="`fence-${rowIndex}-${houseIndex}`"
        :position="position"
      />
    </div>
  </div>
</template>
