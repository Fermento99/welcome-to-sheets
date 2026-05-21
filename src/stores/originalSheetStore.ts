import { getFromStorage, saveToStorage } from '@/utils/sessionStorageUtils';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const STORE_STORAGE_KEY = 'welcome-to-original-sheet-state';
const ACTIONS_KEY = 'welcome-to-original-sheet-actions';
const ACTIONS_INDEX_KEY = 'welcome-to-original-sheet-action-index';

type Value = string | boolean | number | undefined;

type SheetMap = Record<string, Value>;
type Action = {
  fieldId: string;
  prev: Value;
  next: Value;
};

export const useOriginalSheetStore = defineStore('originalSheetStore', () => {
  const boardState = ref<SheetMap>(getFromStorage(STORE_STORAGE_KEY, {}));
  const actions = ref<Action[]>(getFromStorage(ACTIONS_KEY, []));
  const actionIndex = ref<number>(getFromStorage(ACTIONS_INDEX_KEY, 0));

  const getField = computed(() => (id: string) => boardState.value[id]);

  const isActionUndoable = computed(() => actionIndex.value > 0);
  const isActionRedoable = computed(() => actionIndex.value < actions.value.length);

  const _registrAction = (action: Action) => {
    if (actions.value.length !== actionIndex.value) {
      actions.value = actions.value.slice(0, actionIndex.value);
    }

    actions.value.push(action);
    actionIndex.value++;

    _saveActionsList();
    _saveActionsIndex();
  };

  const _saveBoardState = () => {
    saveToStorage(STORE_STORAGE_KEY, boardState.value);
  };

  const _saveActionsList = () => {
    saveToStorage(ACTIONS_KEY, actions.value);
  };

  const _saveActionsIndex = () => {
    saveToStorage(ACTIONS_INDEX_KEY, actionIndex.value);
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

      _saveActionsIndex();
    }
  };

  const redoAction = () => {
    if (actionIndex.value < actions.value.length) {
      const { fieldId, next } = actions.value[actionIndex.value]!;
      _updateValue(fieldId, next);
      actionIndex.value++;

      _saveActionsIndex();
    }
  };

  const resetState = () => {
    actions.value = [];
    boardState.value = {};
    actionIndex.value = 0;
    _saveBoardState();
    _saveActionsList();
    _saveActionsIndex();
  };

  return {
    boardState,
    isActionUndoable,
    isActionRedoable,
    getField,
    handleFieldChange,
    undoAction,
    redoAction,
    resetState,
  };
});
