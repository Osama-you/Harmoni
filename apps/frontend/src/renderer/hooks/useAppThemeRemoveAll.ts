import { useCallback } from 'react';

/**
 * Custom hook to remove all theme-related classes from the document body.
 * It filters out any class that starts with 'theme--' and updates the body class accordingly.
 *
 * @returns {() => void} A function that removes all theme-related classes.
 */
const useAppThemeRemoveAll = () => {
  /**
   * Removes all classes from the body that start with 'theme--'.
   */
  const removeAllThemes = useCallback(() => {
    document.body.className = document.body.className
      .split(' ')
      .filter((className) => !className.startsWith('theme--'))
      .join(' ');
  }, []);

  return removeAllThemes;
};

export default useAppThemeRemoveAll;
