<script setup lang="ts">
import Switch, { type SwitchProps } from './Switch.vue';

const props = defineProps<Omit<SwitchProps, 'type'>>();
</script>

<template>
  <Switch v-bind="props" type="circle" />
</template>
