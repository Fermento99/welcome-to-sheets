<script setup lang="ts">
import type { Point } from '@/models/Point';
import { generateLine } from '@/utils/gridGenerators';
import Input from '@/components/Input.vue';

const generateHouseRow = (startingPoint: Point, count: number, offsetIndexes: number[]) =>
  generateLine(startingPoint, { y: 0, x: 50.4 }, count, { y: 8, x: 0 }, offsetIndexes);

const houses = [
  generateHouseRow({ y: 84, x: 170 }, 10, [2, 6, 7]),
  generateHouseRow({ y: 218, x: 120 }, 11, [0, 3, 7]),
  generateHouseRow({ y: 352, x: 70 }, 12, [1, 6, 10]),
];
</script>

<template>
  <div>
    <div v-for="(row, rowIndex) in houses">
      <Input
        v-for="(position, houseIndex) in row"
        :id="`house-${rowIndex}-${houseIndex}`"
        :position="position"
      />
    </div>
  </div>
</template>
