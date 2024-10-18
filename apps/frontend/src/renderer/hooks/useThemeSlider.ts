import { useEffect, useRef, useState } from 'react';

import { appThemeRemoveAll, limitNumberWithinRange } from '../utils/helper';

/**
 * Custom hook to manage theme slider visibility and interactions based on
 * touch or mouse devices. It handles toggling the slider visibility, updating
 * theme based on user interaction, and ensuring appropriate event listeners.
 *
 * @returns {Object} - `themeSliderRef`: Ref for the theme slider element,
 *                    - `isSliderVisible`: Boolean indicating if the slider is visible,
 *                    - `isTouchDevice`: Boolean indicating if the current device is touch-enabled.
 */
export const useThemeSlider = () => {
  const [isSliderVisible, setSliderVisible] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const themeSliderRef = useRef<HTMLDivElement | null>(null);

  // Effect to set up device type and attach event listeners
  useEffect(() => {
    const checkIfTouchDevice = () =>
      'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(checkIfTouchDevice());

    const showSliderOnMouseEnter = () => {
      if (!isTouchDevice) setSliderVisible(true);
    };

    const hideSliderOnMouseLeave = () => {
      if (!isTouchDevice) setSliderVisible(false);
    };

    const showSliderOnTouch = () => {
      if (isTouchDevice) setSliderVisible(true);
    };

    const hideSliderOnOutsideClick = (event: MouseEvent) => {
      if (
        isTouchDevice &&
        themeSliderRef.current &&
        !themeSliderRef.current.contains(event.target as Node)
      ) {
        setSliderVisible(false);
      }
    };

    const handleTouchMoveOnSlider = (event: TouchEvent) => {
      if (themeSliderRef.current) {
        const sliderElement = event.target as HTMLInputElement;
        const rect = sliderElement.getBoundingClientRect();
        const touch = event.touches[0];

        if (touch) {
          const min = 0;
          const max = 16;
          const value = limitNumberWithinRange(
            Math.round(
              max - ((touch.clientY - rect.top) / rect.height) * (max - min),
            ),
            min,
            max,
          );

          sliderElement.value = value.toString();
          const formattedValue = value < 10 ? `0${value}` : `${value}`;

          appThemeRemoveAll();
          document.body.classList.add(`theme--${formattedValue}`);
        }
      }
    };

    const element = themeSliderRef.current;

    // Add event listeners based on the device type
    if (element) {
      if (!isTouchDevice) {
        element.addEventListener('mouseenter', showSliderOnMouseEnter);
        element.addEventListener('mouseleave', hideSliderOnMouseLeave);
      } else {
        element.addEventListener('click', showSliderOnTouch);
        document.addEventListener('click', hideSliderOnOutsideClick);
        element.addEventListener('touchmove', handleTouchMoveOnSlider);
      }
    }

    // Cleanup event listeners when component unmounts
    return () => {
      if (element) {
        if (!isTouchDevice) {
          element.removeEventListener('mouseenter', showSliderOnMouseEnter);
          element.removeEventListener('mouseleave', hideSliderOnMouseLeave);
        } else {
          element.removeEventListener('click', showSliderOnTouch);
          document.removeEventListener('click', hideSliderOnOutsideClick);
          element.removeEventListener('touchmove', handleTouchMoveOnSlider);
        }
      }
    };
  }, [isTouchDevice]);

  return { themeSliderRef, isSliderVisible, isTouchDevice };
};
