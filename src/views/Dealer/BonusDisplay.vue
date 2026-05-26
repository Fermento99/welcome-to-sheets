<script setup lang="ts">
import type { CardBonus } from '@/models/Card';
import { computed } from 'vue';

const props = defineProps<{
  bonus: CardBonus | null;
  size: 'small' | 'big';
}>();

const sizePx = props.size === 'small' ? '32px' : '80px';

const imgUrl = computed(() => `url(/welcome-to-sheets/${props.bonus}.png)`);
</script>

<template>
  <div
    class="bonus-image"
    :style="{ width: sizePx, height: sizePx, background: imgUrl, backgroundSize: sizePx }"
  ></div>
</template>

<style lang="css" scoped>
.bonus-image {
  background-repeat: no-repeat !important;
  display: inline-block;
}
</style>
