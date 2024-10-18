import { useCallback, useEffect } from 'react';

import { appThemeRemoveAll } from '../utils/helper';
import useAppThemeRemoveAll from './useAppThemeRemoveAll';

/**
 * Custom hook to toggle between two themes: 'theme--00' and 'theme--16'.
 * It also ensures the corresponding slider value is updated.
 *
 * @returns {() => void} A function that toggles between the two themes.
 */
const useAppTheme = () => {
  const removeAllThemes = useAppThemeRemoveAll();

  /**
   * Toggles between 'theme--00' and 'theme--16'.
   * It removes all current theme classes and adds the appropriate one based on the current state.
   */
  const toggleTheme = useCallback(() => {
    const { body } = document;

    if (body.classList.contains('theme--00')) {
      removeAllThemes();
      body.classList.add('theme--16');
      const sliderElement =
        document.querySelector<HTMLInputElement>('.app-aside .slider');
      if (sliderElement) {
        sliderElement.value = '16';
      }
    } else {
      removeAllThemes();
      body.classList.add('theme--00');
      const sliderElement =
        document.querySelector<HTMLInputElement>('.app-aside .slider');
      if (sliderElement) {
        sliderElement.value = '0';
      }
    }
  }, [removeAllThemes]);

  useEffect(() => {
    // Check if user prefers dark mode and toggle the theme accordingly
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      const bodyElement = document.body;

      if (bodyElement.classList.contains('theme--16')) {
        appThemeRemoveAll();
        bodyElement.classList.add('theme--00');

        const sliderElement =
          document.querySelector<HTMLInputElement>('.app-aside .slider');
        if (sliderElement) {
          sliderElement.value = '0';
        }
      }
    }

    // Disable automatic scroll restoration for better control of page position
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = 'manual';
    }
  }, []); // This effect runs only once, on mount

  return toggleTheme;
};

export default useAppTheme;
