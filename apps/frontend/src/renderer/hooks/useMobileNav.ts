import { useCallback, useEffect, useState } from 'react';

/**
 * Custom hook to manage mobile navigation visibility and transition states.
 * It handles opening, closing, and toggling of the mobile navigation,
 * as well as adding/removing relevant CSS classes on the body.
 *
 * @returns {Object}
 * - `openMobileNav`: Function to open the mobile navigation.
 * - `closeMobileNav`: Function to close the mobile navigation.
 * - `isTransitioning`: Boolean indicating if a transition is occurring.
 * - `toggleMobileNav`: Function to toggle the mobile navigation on click.
 * - `isNavVisible`: Boolean indicating if the mobile navigation is visible.
 */
export const useMobileNav = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Manage transition state by adding/removing CSS class
  useEffect(() => {
    document.body.classList.toggle(
      'mobile-nav--is--transitioning',
      isTransitioning,
    );
  }, [isTransitioning]);

  // Manage visibility state by adding/removing CSS class
  useEffect(() => {
    document.body.classList.toggle('mobile-nav--is--visible', isNavVisible);
  }, [isNavVisible]);

  // Function to open mobile navigation
  const openMobileNav = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsNavVisible(true);
    }, 1);
  }, []);

  // Function to close mobile navigation
  const closeMobileNav = useCallback(() => {
    setIsNavVisible(false);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, []);

  // Function to toggle navigation on click
  const toggleMobileNav = useCallback(() => {
    if (isNavVisible) {
      closeMobileNav();
    } else {
      openMobileNav();
    }
  }, [isNavVisible, closeMobileNav, openMobileNav]);

  // Close navigation when a nav item is clicked or window is resized
  useEffect(() => {
    const handleNavItemClick = () => {
      if (isNavVisible) {
        closeMobileNav();
      }
    };

    const handleWindowResize = () => {
      if (isNavVisible) {
        closeMobileNav();
      }
    };

    const navItems = document.querySelectorAll('.app-nav .item');
    window.addEventListener('resize', handleWindowResize);

    navItems.forEach((item) => {
      item.addEventListener('click', handleNavItemClick);
    });

    // Cleanup event listeners on unmount
    return () => {
      navItems.forEach((item) => {
        item.removeEventListener('click', handleNavItemClick);
      });

      window.removeEventListener('resize', handleWindowResize);
    };
  }, [isNavVisible, closeMobileNav]);

  return {
    openMobileNav,
    closeMobileNav,
    isTransitioning,
    toggleMobileNav,
    isNavVisible,
  };
};
