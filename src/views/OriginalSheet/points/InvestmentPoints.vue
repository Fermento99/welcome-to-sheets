<script setup lang="ts">
import Input from '@/components/Input.vue';
import { SUM_ROW_Y } from './constants';
import { generateLine } from '@/utils/gridGenerators';
import type { Point } from '@/models/Point';
import Circle from '@/components/Circle.vue';

const X_INCREMENT = 35.5;

const generateInvestmentCircles = (startingPoint: Point, count: number) =>
  generateLine(startingPoint, { x: 0, y: 21.4 }, count);

const investmentCircles = [...Array(6)].map((_, index) =>
  generateInvestmentCircles(
    { y: 558 - 12 * index, x: 323 + (X_INCREMENT - 1.5) * index },
    Math.min(index + 1, 4),
  ),
);

const investmentMultipliers = generateLine({ y: 623, x: 330 }, { x: X_INCREMENT, y: 0 }, 6);
const investmentPartialSums = generateLine({ y: SUM_ROW_Y, x: 313 }, { x: X_INCREMENT, y: 0 }, 6);
</script>

<template>
  <div v-for="(column, columnIndex) in investmentCircles">
    <Circle
      v-for="(position, index) in column"
      :id="`investment-circle-${columnIndex}-${index}`"
      :position="position"
    />
  </div>
  <Input
    v-for="(position, investmentIndex) in investmentMultipliers"
    :id="`investments-points_sum-${investmentIndex}`"
    :position="position"
    :size="23"
  />
  <Input
    v-for="(position, investmentIndex) in investmentPartialSums"
    :id="`investments-points_sum-${investmentIndex}`"
    :position="position"
  />
</template>
