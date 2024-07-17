export function debounce(func, delay) {
  let timeoutObj = "";
  return (...args) => {
    clearTimeout(timeoutObj);
    timeoutObj = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export function throttle(func, delay) {
  let timeoutObj = "";
  return (...args) => {
    if (!timeoutObj) {
      func(...args);
      timeoutObj = setTimeout(() => {
        timeoutObj = "";
      }, delay);
    }
  };
}
