export const saveToStorage = (key: string, item: unknown) => {
  sessionStorage.setItem(key, JSON.stringify(item));
};

export const getFromStorage = (key: string, fallback?: unknown) => {
  const item = sessionStorage.getItem(key);
  return item ? JSON.parse(item) : fallback;
};
