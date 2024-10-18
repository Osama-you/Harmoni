import { useCallback } from 'react';

import useAppThemeRemoveAll from './useAppThemeRemoveAll';

/**
 * Custom hook to cycle through themes in a spectrum.
 * The hook allows cycling forward or backward through a range of themes.
 *
 * @returns {(isReverse?: boolean) => void} A function to cycle through the themes. Pass `true` to cycle forward.
 */
const useAppThemeSpectrum = () => {
  const removeAllThemes = useAppThemeRemoveAll();

  /**
   * Cycles through themes by adding or removing a theme class to the body.
   *
   * @param {boolean} [isReverse=false] - If true, cycles forward through themes. Otherwise, cycles backward.
   */
  const cycleThemes = useCallback(
    (isReverse: boolean = false) => {
      const { body } = document;
      const currentTheme = body.className.match(/theme--\d+/)?.[0]; // Find the current theme class

      if (currentTheme) {
        const currentThemeNumber = parseInt(
          currentTheme.split('--')[1] || '00',
          10,
        );
        let nextThemeNumber;

        // Determine the next theme number based on the direction
        if (isReverse) {
          nextThemeNumber =
            currentThemeNumber === 16 ? 0 : currentThemeNumber + 1;
        } else {
          nextThemeNumber =
            currentThemeNumber === 0 ? 16 : currentThemeNumber - 1;
        }

        // Remove all current theme classes and apply the new theme
        removeAllThemes();
        body.classList.add(
          `theme--${nextThemeNumber.toString().padStart(2, '0')}`,
        );

        // Update the theme slider value to reflect the new theme
        const sliderElement =
          document.querySelector<HTMLInputElement>('.app-aside .slider');
        if (sliderElement) {
          sliderElement.value = nextThemeNumber.toString();
        }
      }
    },
    [removeAllThemes],
  );

  return cycleThemes;
};

export default useAppThemeSpectrum;
