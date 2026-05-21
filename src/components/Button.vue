<script setup lang="ts">
const emit = defineEmits<{
  click: [PointerEvent];
}>();
const { type = 'default' } = defineProps<{
  type?: 'warning' | 'default';
}>();
</script>

<template>
  <button :class="`button_${type}`" @click="(event) => emit('click', event)"><slot></slot></button>
</template>

<style lang="css" scoped>
button {
  padding: 4px 8px;
  border-style: none;
  cursor: pointer;
}

.button_warning {
  background-color: red;
  color: white;
}
</style>
