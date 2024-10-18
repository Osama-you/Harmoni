import Cover from '../components/Cover';
import useKeydownEvents from '../hooks/useKeydownEvents';
import { AppAside } from './AppAside';
import GridOverlay from './GridOverlay';
import { Header } from './Header';
import NavigationMenu from './NavigationMenu';

interface MainLayoutProps {
  children?: React.ReactNode;
  appName?: string; // Optional prop for dynamic app name
}

/**
 * MainLayout component acts as the main layout structure for the application.
 * It includes the header, aside, navigation menu, and a content area.
 *
 * @param {MainLayoutProps} props - The props for the layout, including optional children and app name.
 * @returns {JSX.Element} The rendered main layout component.
 */
function MainLayout({
  children,
  appName = 'HarmOni',
}: MainLayoutProps): JSX.Element {
  useKeydownEvents();
  return (
    <>
      {/* Header uses the appName, which can be passed as a prop or loaded from config */}
      <Header name={appName} />
      <AppAside />
      <NavigationMenu />

      <main className="app-main">
        {/* The Cover component renders the app's cover page */}
        <Cover />
        {children} {/* Dynamic children elements */}
      </main>
      <GridOverlay />
    </>
  );
}

export default MainLayout;
