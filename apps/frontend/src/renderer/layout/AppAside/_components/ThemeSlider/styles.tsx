import { createGlobalStyle, css } from 'styled-components';

/**
 * Generates dynamic styles for different theme levels.
 * The styles adjust the position and transition delay of elements based on the theme level.
 *
 * @param {number} maxLevel - The maximum theme level.
 * @returns {string} The generated CSS styles for different theme levels.
 */
const generateThemeStyles = (maxLevel: number): string => {
  return Array.from({ length: maxLevel + 1 })
    .map(
      (_, level) => `
        .theme--${String(maxLevel - level).padStart(2, '0')}
          .app-aside
          .option.theme.theme-slider--is--visible
          .icon-container {
          bottom: ${(maxLevel - level) * 20}px;
        }
        body.theme--${String(maxLevel - level).padStart(2, '0')}
          .app-aside
          .option.theme
          .icon-container {
          transition-delay: ${level * 0.02}s;
        }
        .app-aside .option.theme .dot:nth-child(${maxLevel + 1 - level}) {
          background-color: ${
            level % 4 === 0
              ? 'var(--color--foreground--100)'
              : 'var(--color--foreground--25)'
          };
          transition-delay: ${(level * 0.02).toFixed(2)}s;
        }
      `,
    )
    .join('');
};

/**
 * Global styles that apply dynamic theme styles.
 */
export const GlobalThemeStyles = createGlobalStyle<{ maxLevel: number }>`
  ${({ maxLevel }) => css`
    ${generateThemeStyles(maxLevel)}
  `}
`;
