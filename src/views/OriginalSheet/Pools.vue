<script setup lang="ts">
import Circle from '@/components/Circle.vue';

const SIZE = { x: 34, y: 16 };
const ROW_0_Y = 62;
const ROW_1_Y = 198;
const ROW_2_Y = 332;
</script>

<template>
  <div>
    <Circle id="pool-0-0" :position="{ x: 270, y: ROW_0_Y }" :size="SIZE" />
    <Circle id="pool-0-1" :position="{ x: 472, y: ROW_0_Y }" :size="SIZE" />
    <Circle id="pool-0-2" :position="{ x: 524, y: ROW_0_Y }" :size="SIZE" />

    <Circle id="pool-1-0" :position="{ x: 121, y: ROW_1_Y }" :size="SIZE" />
    <Circle id="pool-1-1" :position="{ x: 270, y: ROW_1_Y }" :size="SIZE" />
    <Circle id="pool-1-2" :position="{ x: 472, y: ROW_1_Y }" :size="SIZE" />

    <Circle id="pool-2-0" :position="{ x: 121, y: ROW_2_Y }" :size="SIZE" />
    <Circle id="pool-2-1" :position="{ x: 372, y: ROW_2_Y }" :size="SIZE" />
    <Circle id="pool-2-2" :position="{ x: 574, y: ROW_2_Y }" :size="SIZE" />
  </div>
</template>
