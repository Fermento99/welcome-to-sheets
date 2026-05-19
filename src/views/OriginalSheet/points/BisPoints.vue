<script setup lang="ts">
import Input from '@/components/Input.vue';
import Cross from '@/components/Cross.vue';
import { SUM_ROW_Y } from './constants';
import { generateGrid } from '@/utils/gridGenerators';

const bises = generateGrid({ y: 501, x: 552 }, { x: 27, y: 30.7 }, [5, 4]);
</script>

<template>
  <Cross v-for="(position, index) in bises" :id="`bis-cross-${index}`" :position="position" />
  <Input id="bis-points_sum" :position="{ x: 561, y: SUM_ROW_Y }" />
</template>
