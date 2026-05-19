<script setup lang="ts">
import Input from '@/components/Input.vue';
import ObjectivePoints from './ObjectivePoints.vue';
import ParkPoints from './ParkPoints.vue';
import PoolPoints from './PoolPoints.vue';
import BuilderPoints from './BuilderPoints.vue';
import InvestmentPoints from './InvestmentPoints.vue';
import BisPoints from './BisPoints.vue';
import MistakePoints from './MistakePoints.vue';
import { SUM_ROW_Y } from './constants';
</script>

<template>
  <div>
    <ObjectivePoints />
    <ParkPoints />
    <PoolPoints />
    <BuilderPoints />
    <InvestmentPoints />
    <BisPoints />
    <MistakePoints />

    <Input id="grand-points_sum" :position="{ x: 678, y: SUM_ROW_Y }" />
  </div>
</template>
