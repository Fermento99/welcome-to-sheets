<script setup lang="ts">
import { useOriginalSheetStore } from '@/stores/originalSheetStore';
import { useUtilsStore } from '@/stores/utilsStore';
import Button from './Button.vue';

const ogSheetStore = useOriginalSheetStore();
const utilsStore = useUtilsStore();

const confirmReset = () => {
  const isConfirmed = confirm('This action is irreversible');
  if (isConfirmed) ogSheetStore.resetState();
};
</script>

<template>
  <div class="controls-container">
    <Button type="warning" @click="confirmReset">Reset State</Button>
    <Button
      @click="utilsStore.switchHighlightClickableAreas"
      :active="utilsStore.isHighlightClickableAreas"
    >
      Highlight Clickable Areas
    </Button>
    <Button @click="ogSheetStore.undoAction" :disabled="!ogSheetStore.isActionUndoable">
      Undo
    </Button>
    <Button @click="ogSheetStore.redoAction" :disabled="!ogSheetStore.isActionRedoable">
      Redo
    </Button>
  </div>
</template>

<style lang="css">
.controls-container {
  margin: 8px;
  display: flex;
  gap: 12px;
  justify-content: center;
}
</style>
