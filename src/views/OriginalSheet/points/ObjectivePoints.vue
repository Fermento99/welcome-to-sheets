<script setup lang="ts">
import Input from '@/components/Input.vue';
import { SUM_ROW_Y } from './constants';

const COLUMN_X = 28;
</script>

<template>
  <Input id="objective-points_obj-1" :position="{ x: COLUMN_X, y: 498 }" />
  <Input id="objective-points_obj-2" :position="{ x: COLUMN_X, y: 558 }" />
  <Input id="objective-points_obj-3" :position="{ x: COLUMN_X, y: 617 }" />
  <Input id="objective-points_sum" :position="{ x: COLUMN_X, y: SUM_ROW_Y }" />
</template>
