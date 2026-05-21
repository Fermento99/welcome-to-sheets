import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUtilsStore = defineStore('utilsStore', () => {
  const isHighlightClickableAreas = ref(false);

  const switchHighlightClickableAreas = () => {
    isHighlightClickableAreas.value = !isHighlightClickableAreas.value;
  };

  return { isHighlightClickableAreas, switchHighlightClickableAreas };
});
