import './style.css';

import { useEffect } from 'react';

/**
 * Custom hook to manage the app cover's visibility and loading state.
 *
 * It hides the cover after a set delay and removes the 'loading' class after a longer delay.
 * Both timeouts are cleared when the component unmounts to prevent memory leaks.
 *
 * @returns {void}
 */
const useAppCoverVisibility = (): void => {
  useEffect(() => {
    const hideCoverAfterDelay = setTimeout(() => {
      document.body.classList.remove('cover--is--visible');
    }, 1750);

    const removeLoadingStateAfterDelay = setTimeout(() => {
      document.body.classList.remove('is--loading');
    }, 3250);

    // Cleanup timeouts on component unmount
    return () => {
      clearTimeout(hideCoverAfterDelay);
      clearTimeout(removeLoadingStateAfterDelay);
    };
  }, []);
};

/**
 * Cover Component
 *
 * This component displays the app's cover screen with the title and tagline.
 * It utilizes the `useAppCoverVisibility` hook to manage the cover's visibility state.
 *
 * @returns {JSX.Element} The rendered cover section with HarmOni branding.
 */
function Cover(): JSX.Element {
  useAppCoverVisibility();
  return (
    <section className="section cover">
      <div className="content">
        <div>
          <h1>HarmOni </h1>
          <br />
          <h2>—Your all-in-one entertainment hub</h2>
        </div>
      </div>
    </section>
  );
}

export default Cover;
