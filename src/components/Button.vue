<script setup lang="ts">
const emit = defineEmits<{
  click: [PointerEvent];
}>();
const { type = 'default' } = defineProps<{
  type?: 'warning' | 'default';
  active?: boolean;
}>();
</script>

<template>
  <button
    :class="`button button_${type} button_active__${active ? 'on' : 'off'}`"
    @click="(event) => emit('click', event)"
  >
    <slot></slot>
  </button>
</template>

<style lang="css" scoped>
.button {
  padding: 4px 12px;
  border-style: none;
  cursor: pointer;
  background-color: #587b7f;
  color: white;
  transition: ease 0.1s;
}

.button_warning {
  background-color: #db5461;
}

.button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.button:hover:not(:disabled) {
  transform: scale(1.05);
}

.button:active:not(:disabled) {
  transform: scale(0.98);
  transition: ease 0.03s;
}

.button_active__on {
  background-color: #588068;
}
</style>
