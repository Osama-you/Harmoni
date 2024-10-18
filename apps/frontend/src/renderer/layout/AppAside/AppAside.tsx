import './style.css';

import DisplayGrid from './_components/DisplayGrid';
import ThemeSlider from './_components/ThemeSlider';
import { appAsideClasses } from './appAsideClasses';

/**
 * AppAside component serves as a sidebar for the application, containing theme control options such as a slider for theme adjustment and a grid display toggle.
 *
 * @component
 * @example
 * return (
 *   <AppAside />
 * )
 */
function AppAside() {
  return (
    <aside className={appAsideClasses.sidebar}>
      <div className={appAsideClasses.controlsContainer}>
        <ThemeSlider />
        <DisplayGrid />
      </div>
    </aside>
  );
}

export default AppAside;
