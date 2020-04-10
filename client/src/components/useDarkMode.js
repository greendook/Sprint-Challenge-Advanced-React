import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
// this is my custom hook for dark mode

// creating darkmode function while also setting it to my uselocalstorage hook
export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage(false);

  // ? : is the shorter version of an if/else staement
  // setting a useEffect for the body and using ? : to switch back and forth between darkmode
  useEffect(() => {
    const body = document.querySelector('body');
    darkMode
      ? body.classList.add('dark-mode')
      : body.classList.remove('dark-mode');
  });

  return [darkMode, setDarkMode];
};
