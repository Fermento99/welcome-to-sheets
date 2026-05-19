<script setup lang="ts">
import Input from '@/components/Input.vue';
import { SUM_ROW_Y } from './constants';
import { generateLine } from '@/utils/gridGenerators';
import Cross from '@/components/Cross.vue';

const COLUMN_X = 631;

const roundabouts = generateLine({ x: COLUMN_X, y: 454 }, { x: 0, y: 29 }, 2);
const mistakes = generateLine({ x: COLUMN_X, y: 543 }, { x: 0, y: 30 }, 3);
</script>

<template>
  <Cross
    v-for="(position, index) in roundabouts"
    :id="`roundabout-${index}`"
    :position="position"
  />

  <Cross v-for="(position, index) in mistakes" :id="`mistake-${index}`" :position="position" />

  <Input id="error-points_sum" :position="{ x: 627, y: SUM_ROW_Y }" />
</template>
