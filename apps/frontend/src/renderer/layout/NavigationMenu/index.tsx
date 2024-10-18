import './style.css';

import clsx from 'classnames';

import { navigationMenuClasses } from './navigationMenuClasses';

/**
 * NavigationMenu component renders a list of selectable menu items.
 * Each item is clickable and can be navigated via keyboard (Enter key).
 *
 * @component
 * @returns {JSX.Element} The rendered navigation menu component.
 */
function NavigationMenu(): JSX.Element {
  /**
   * Handles the click event when a navigation item is selected.
   *
   * @param {string} key - The unique key of the selected item.
   */
  const handleItemSelect = (key: string) => {
    console.log(key); // You can replace this with your actual item selection handling logic.
  };

  // Menu items to be rendered
  const menuItems = [
    { key: 'Item1', label: 'Item 1' },
    { key: 'Item2', label: 'Item 2' },
    { key: 'Item3', label: 'Item 3' },
    { key: 'Item4', label: 'Item 4' },
    { key: 'Item5', label: 'Item 5' },
    { key: 'Item6', label: 'Item 6' },
    { key: 'Item7', label: 'Item 7' },
    { key: 'Item8', label: 'Item 8' },
  ];

  return (
    <nav className={navigationMenuClasses.nav}>
      <div className={navigationMenuClasses.content}>
        {menuItems.map((item) => (
          <div
            key={item.key}
            className={clsx(navigationMenuClasses.item, {
              [navigationMenuClasses.isActive]: item.key === 'Item1', // Conditionally apply active class
            })}
            onClick={() => handleItemSelect(item.key)} // Handle click event
            aria-label={item.label}
            role="button"
            tabIndex={0} // Make the item focusable for keyboard navigation
            onKeyDown={(e) => e.key === 'Enter' && handleItemSelect(item.key)} // Handle Enter key for selection
          >
            {item.label}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default NavigationMenu;
