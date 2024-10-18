export const appThemeRemoveAll = () => {
  const { body } = document;

  // Get all classes on the body
  const themeClasses = body.className.split(' ').filter((className) => {
    // Filter out classes that start with 'theme--'
    return className.startsWith('theme--');
  });

  // Remove all theme classes
  themeClasses.forEach((themeClass) => {
    body.classList.remove(themeClass);
  });
};

/**
 * Limits a number within a specified range.
 *
 * @param {number|string} num - The number to be limited.
 * @param {number} [min=1] - The minimum value of the range.
 * @param {number} [max=20] - The maximum value of the range.
 * @returns {number} - The limited number.
 */
export const limitNumberWithinRange = (
  num: number | string,
  min = 1,
  max = 20,
): number => {
  const parsed = parseInt(num as string, 10); // Using radix 10 to parse the number
  return Math.min(Math.max(Number.isNaN(parsed) ? min : parsed, min), max);
};
