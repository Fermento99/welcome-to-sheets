<script setup lang="ts">
import { useOriginalSheetStore } from '@/stores/originalSheetStore';
import { useUtilsStore } from '@/stores/utilsStore';

const ogSheetStore = useOriginalSheetStore();
const utilsStore = useUtilsStore();
</script>

<template>
  <div>
    <button @click="ogSheetStore.resetState">reset state</button>
    <button @click="utilsStore.switchHighlightClickableAreas">highlight clickable areas</button>
    <button @click="ogSheetStore.undoAction" :disabled="!ogSheetStore.isActionUndoable">
      Undo action
    </button>
    <button @click="ogSheetStore.redoAction" :disabled="!ogSheetStore.isActionRedoable">
      Redo action
    </button>
  </div>
</template>
