<script setup lang="ts">
import Button from '@/components/Button.vue';
</script>

<template>
  <div class="buttons-container">
    <h1>Welcome to Sheets!</h1>
    <RouterLink to="/original"><Button> Original Sheet </Button> </RouterLink>
  </div>
</template>

<style lang="css" scoped>
.buttons-container {
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
</style>
