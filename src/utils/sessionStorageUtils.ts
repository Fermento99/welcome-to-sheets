export const saveToStorage = (key: string, item: object) => {
  sessionStorage.setItem(key, JSON.stringify(item));
};

export const getFromStorage = (key: string, fallback?: object) => {
  const item = sessionStorage.getItem(key);
  return item ? JSON.parse(item) : fallback;
};
