<script setup lang="ts">
import type { Point } from '@/models/Point';
import { generateLine } from '@/utils/gridGenerators';
import Cross from '@/components/Cross.vue';

const generateParkCrosses = (startingPoint: Point, count: number) =>
  generateLine(startingPoint, { y: 0, x: 25.5 }, count);

const parks = [
  generateParkCrosses({ y: 24, x: 586 }, 3),
  generateParkCrosses({ y: 159, x: 560 }, 4),
  generateParkCrosses({ y: 294, x: 534 }, 5),
];
</script>

<template>
  <div>
    <div v-for="(row, rowIndex) in parks">
      <Cross
        v-for="(park, parkIndex) in row"
        :id="`park-${rowIndex}-${parkIndex}`"
        :position="park"
      />
    </div>
  </div>
</template>
