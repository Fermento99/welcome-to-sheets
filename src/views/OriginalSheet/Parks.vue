<script setup lang="ts">
import type { Point } from '@/models/Point';
import { generateLine } from '@/utils/gridGenerators';
import Circle from '@/components/Circle.vue';

const generateParkCircles = (startingPoint: Point, count: number) =>
  generateLine(startingPoint, { y: 0, x: 25.5 }, count);

const parks = [
  generateParkCircles({ y: 24, x: 586 }, 3),
  generateParkCircles({ y: 159, x: 560 }, 4),
  generateParkCircles({ y: 294, x: 534 }, 5),
];
</script>

<template>
  <div>
    <div v-for="(row, rowIndex) in parks">
      <Circle
        v-for="(park, parkIndex) in row"
        :id="`park-${rowIndex}-${parkIndex}`"
        :position="park"
      />
    </div>
  </div>
</template>
