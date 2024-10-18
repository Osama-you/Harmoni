import './styles.css';

import { useCustomPointer } from './useCustomPointer';

/**
 * CustomPointer Component
 *
 * This component renders a custom pointer for the web page.
 * It uses the `useCustomPointer` hook to control the pointer's behavior
 * and styling.
 *
 * @returns {JSX.Element} A div representing the custom pointer.
 */
function CustomPointer() {
  // Hook that handles custom pointer logic
  useCustomPointer();

  return (
    <div className="pointer" aria-hidden="true">
      <div
        className="pointer__circle pointer__circle--small"
        style={{
          display: 'flex',
          height: '0.375rem',
          width: '0.375rem',
          transform: 'translate(-50%, -50%)  translate3d(50vw, 50vh, 0px)',
          backgroundColor: 'var(--color--foreground--100)',
          opacity: 0,
        }}
      />
    </div>
  );
}

export default CustomPointer;
