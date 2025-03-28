// Save to localStorage
export const saveToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  // Get from localStorage
  export const getFromStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  