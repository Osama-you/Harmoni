import './style.css';

import clsx from 'classnames';
import React from 'react';

import { useThemeSlider } from '../../../../hooks/useThemeSlider';
import { appThemeRemoveAll } from '../../../../utils/helper';
import { appAsideClasses } from '../../appAsideClasses';
import { GlobalThemeStyles } from './styles';
import ThemeIcon from './ThemeIcon';

const THEME_COUNT = 17; // Total number of theme options in the slider

/**
 * ThemeSlider component for selecting and applying themes using a slider.
 *
 * This component displays a slider with dots representing different themes.
 * It utilizes the `useThemeSlider` hook to manage slider visibility and interaction.
 * The slider allows users to select and apply themes by adjusting the range input.
 *
 * @component
 * @returns {JSX.Element} The rendered theme slider component.
 */
function ThemeSlider(): JSX.Element {
  const [themeValue, setThemeValue] = React.useState(0); // Current theme value
  const { themeSliderRef, isSliderVisible, isTouchDevice } = useThemeSlider(); // Custom hook for slider functionality

  /**
   * Handles slider value change and applies the selected theme.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event from the slider input.
   */
  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sliderValue = +event.target.value; // Convert input value to number
    const formattedValue =
      sliderValue < 10 ? `0${sliderValue}` : `${sliderValue}`; // Ensure theme value is always two digits

    setThemeValue(sliderValue); // Update theme value state

    // Remove all existing theme classes from the body
    appThemeRemoveAll();

    // Apply the new theme class based on slider value
    document.body.classList.add(`theme--${formattedValue}`);
  };

  return (
    <div
      ref={themeSliderRef}
      className={clsx(appAsideClasses.option, appAsideClasses.themeRoot, {
        'theme-slider--is--visible': isSliderVisible, // Conditional class for visibility
        touchevents: isTouchDevice, // Conditional class based on touch support
        'no-touchevents': !isTouchDevice,
      })}
    >
      <div className={appAsideClasses.themeIcon}>
        <ThemeIcon
          className={clsx(appAsideClasses.icon, appAsideClasses.themeRoot)}
        />
      </div>

      <div className={appAsideClasses.themeSliderContainer}>
        <div className={appAsideClasses.themeSliderDots}>
          {Array.from({ length: THEME_COUNT }, (_, index) => (
            <div key={index} className="dot" />
          ))}
        </div>

        <input
          className={appAsideClasses.themeSliderInput}
          type="range"
          min="0"
          max={THEME_COUNT - 1}
          step="1"
          value={themeValue}
          onChange={handleSliderChange}
          aria-label="Select Theme" // Accessibility label
        />
      </div>

      <GlobalThemeStyles maxLevel={THEME_COUNT - 1} />
    </div>
  );
}

export default ThemeSlider;
