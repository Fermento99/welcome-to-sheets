<script setup lang="ts">
import Input from '@/components/Input.vue';
import Houses from './Houses.vue';
import SheetContainer from '@/components/SheetContainer.vue';
import Parks from './Parks.vue';
import Points from './points';
import Pools from './Pools.vue';
import Fences from './Fences.vue';
import Controls from '@/components/Controls.vue';
</script>

<template>
  <Controls />
  <SheetContainer img="./original-sheet-image.jpg">
    <Input id="town-name" :position="{ x: 31, y: 116 }" :size="102" />
    <Houses />
    <Pools />
    <Parks />
    <Fences />
    <Points />
  </SheetContainer>
</template>
