import React, { useRef } from 'react';

/**
 * GridOverlay component renders a grid overlay with multiple columns, each containing lines.
 * It is designed to be used as an aside in the app's layout, providing a visual grid reference.
 *
 * @component
 * @example
 * return (
 *   <GridOverlay />
 * )
 */
function GridOverlay() {
  const gridOverlayRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={gridOverlayRef} className="app-grid-overlay">
      {Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="column">
          <div className="line" />
          <div className="line" />
        </div>
      ))}
    </div>
  );
}

export default GridOverlay;
