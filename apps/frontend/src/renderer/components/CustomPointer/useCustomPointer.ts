import { useEffect, useRef } from 'react';

/**
 * Custom hook to initialize and manage a custom pointer that follows mouse movement
 * with a slight delay and hides when the cursor is in its default state (e.g., `auto` or `pointer`).
 *
 * @returns {void}
 */
export function useCustomPointer(): void {
  const smallPointerElement = useRef<HTMLElement | null>(null);
  const animationFrameId = useRef<number | null>(null);

  // Track current and target positions of the pointer
  const currentPointerPos = useRef({ x: 0, y: 0 });
  const targetPointerPos = useRef({ x: 0, y: 0 });
  const pointerFollowSpeed = 0.1; // Speed of pointer delay in following the mouse

  useEffect(() => {
    // Early return on touch devices to avoid custom pointer activation
    if (!window || 'ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return () => {}; // Return empty cleanup function for consistency
    }

    // Detect pointer or mouse movement event type
    const movementEventType =
      'onpointerdown' in document.documentElement ? 'pointermove' : 'mousemove';
    smallPointerElement.current = document.querySelector(
      '.pointer__circle--small',
    );

    const handleMouseMove = (event: MouseEvent) => {
      // Get the element under the mouse pointer
      const hoveredElement = document.elementFromPoint(
        event.clientX,
        event.clientY,
      );
      if (!hoveredElement) return;

      // Get the computed cursor style of the hovered element
      const hoveredElementCursorStyle =
        window.getComputedStyle(hoveredElement).cursor;

      // Update the target position with current mouse coordinates
      targetPointerPos.current.x = event.clientX;
      targetPointerPos.current.y = event.clientY;

      // Toggle small pointer visibility based on the cursor style
      if (smallPointerElement.current) {
        smallPointerElement.current.style.opacity =
          hoveredElementCursorStyle === 'pointer' ||
          hoveredElementCursorStyle === ''
            ? '0'
            : '1';
      }
    };

    const animatePointer = () => {
      // Smoothly move the custom pointer toward the target position
      currentPointerPos.current.x +=
        (targetPointerPos.current.x - currentPointerPos.current.x) *
        pointerFollowSpeed;
      currentPointerPos.current.y +=
        (targetPointerPos.current.y - currentPointerPos.current.y) *
        pointerFollowSpeed;

      // Apply the transform to move the pointer element
      if (smallPointerElement.current) {
        smallPointerElement.current.style.transform = `translate(-50%, -50%) translate3d(${currentPointerPos.current.x}px, ${currentPointerPos.current.y}px, 0px)`;
      }

      // Continue the animation loop
      animationFrameId.current = requestAnimationFrame(animatePointer);
    };

    // Attach mouse move event listener and start pointer animation
    window.addEventListener(movementEventType, handleMouseMove);
    animationFrameId.current = requestAnimationFrame(animatePointer);

    // Cleanup on component unmount or effect re-run
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener(movementEventType, handleMouseMove);
    };
  }, []);
}
