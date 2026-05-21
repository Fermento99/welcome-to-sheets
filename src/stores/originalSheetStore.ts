import { getFromStorage, saveToStorage } from '@/utils/sessionStorageUtils';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const STORE_STORAGE_KEY = 'welcome-to-original-sheet-state';

type Value = string | boolean | number | undefined;

type SheetMap = Record<string, Value>;
type Action = {
  fieldId: string;
  prev: Value;
  next: Value;
};

export const useOriginalSheetStore = defineStore('originalSheetStore', () => {
  const boardState = ref<SheetMap>(getFromStorage(STORE_STORAGE_KEY, {}));
  const actions = ref<Action[]>([]);
  const actionIndex = ref<number>(0);

  console.log(boardState.value);
  const getField = computed(() => (id: string) => boardState.value[id]);

  const _registrAction = (action: Action) => {
    if (actions.value.length !== actionIndex.value) {
      actions.value = actions.value.slice(0, actionIndex.value);
    }

    actions.value.push(action);
  };

  const _saveBoardState = () => {
    saveToStorage(STORE_STORAGE_KEY, boardState.value);
  };

  const _updateValue = (id: string, value: Value) => {
    boardState.value[id] = value;
    _saveBoardState();
  };

  const handleFieldChange = (id: string, value: Value) => {
    _registrAction({
      fieldId: id,
      prev: boardState.value[id],
      next: value,
    });

    _updateValue(id, value);
  };

  const undoAction = () => {
    if (actionIndex.value > 0) {
      actionIndex.value--;
      const { fieldId, prev } = actions.value[actionIndex.value]!;
      _updateValue(fieldId, prev);
    }
  };

  const redoAction = () => {
    if (actionIndex.value < actions.value.length) {
      actionIndex.value++;
      const { fieldId, next } = actions.value[actionIndex.value]!;
      _updateValue(fieldId, next);
    }
  };

  return { boardState, handleFieldChange, getField, undoAction, redoAction };
});
