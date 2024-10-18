import './style.css';

import clsx from 'classnames';

import { appAsideClasses } from '../../appAsideClasses';
import GridIcon from './GridIcon';

/**
 * DisplayGrid component renders an interactive button that toggles the visibility of the grid overlay.
 * The component uses a GridIcon to visually represent the grid toggle functionality.
 *
 * @component
 * @example
 * return (
 *   <DisplayGrid />
 * )
 */
function DisplayGrid(): JSX.Element {
  /**
   * Handles toggling the visibility of the grid overlay by adding/removing
   * the `is--visible` class on the `.app-grid-overlay` element.
   */
  const handleGridToggle = () => {
    const gridOverlayElement =
      document.querySelector<HTMLDivElement>('.app-grid-overlay');
    if (gridOverlayElement) {
      gridOverlayElement.classList.toggle('is--visible');
    }
  };

  return (
    <div
      className={clsx(appAsideClasses.option, appAsideClasses.gridRoot)}
      onClick={handleGridToggle}
      aria-label="Toggle Grid Overlay"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleGridToggle()}
    >
      <div className={appAsideClasses.content}>
        <GridIcon
          className={clsx(appAsideClasses.icon, appAsideClasses.gridRoot)}
        />
      </div>
    </div>
  );
}

export default DisplayGrid;
