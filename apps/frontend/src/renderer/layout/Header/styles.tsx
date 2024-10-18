import styled, { css } from 'styled-components';

/**
 * Interface defining the properties for the Brand component.
 *
 * @interface BrandProps
 * @property {number} characterCount - The length of the brand name, used to generate hover styles.
 */
interface BrandProps {
  characterCount: number;
}

/**
 * Generates dynamic hover styles for each character in the brand name.
 * The styles include a delay effect for a staggered transition.
 *
 * @param {number} characterCount - The number of characters in the brand name.
 * @returns {string} The generated CSS hover styles.
 */
const generateCharacterHoverStyles = (characterCount: number): string => {
  return Array.from({ length: characterCount - 1 })
    .map(
      (_, index) => `
        &:hover h3 span:nth-child(${index + 2}) {
          transition-delay: ${index * 0.07}s;
        }
        & h3 span:nth-child(${index + 2}) {
          transition-delay: ${(characterCount - 2 - index) * 0.07}s;
        }
      `,
    )
    .join(' ');
};

/**
 * Styled component that wraps the brand name and applies dynamic hover styles.
 */
export const Brand = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'characterCount',
})<BrandProps>`
  ${({ characterCount }) => css`
    ${generateCharacterHoverStyles(characterCount)}
  `}
`;
