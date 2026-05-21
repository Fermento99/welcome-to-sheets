<script setup lang="ts">
import Input from '@/components/Input.vue';
import { SUM_ROW_Y } from './constants';
import { generateGrid } from '@/utils/gridGenerators';
import Circle from '@/components/Circle.vue';

const pools = generateGrid({ y: 524, x: 153 }, { x: 24, y: 25 }, [5, 4]);
</script>

<template>
  <Circle v-for="(position, index) in pools" :id="`pool-circle-${index}`" :position="position" />
  <Input id="pools-points_sum" :position="{ x: 156, y: SUM_ROW_Y }" />
</template>
