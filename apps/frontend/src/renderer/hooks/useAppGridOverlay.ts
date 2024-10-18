import { useCallback } from 'react';

/**
 * Custom hook to toggle the visibility of the grid overlay.
 * The hook finds the element with the class `.app-grid-overlay`
 * and toggles the `is--visible` class.
 *
 * @returns {() => void} Function to toggle the grid overlay's visibility.
 */
const useAppGridOverlay = () => {
  const toggleGridOverlay = useCallback(() => {
    const gridOverlay = document.querySelector('.app-grid-overlay');
    if (gridOverlay) {
      gridOverlay.classList.toggle('is--visible');
    }
  }, []);

  return toggleGridOverlay;
};

export default useAppGridOverlay;
