import React from 'react';

interface GridIconProps extends React.SVGProps<SVGSVGElement> {}

/**
 * GridIcon Component
 *
 * A reusable SVG component representing a grid icon. It accepts all standard SVG props
 * via the `GridIconProps` interface and can be customized using these props.
 *
 * @param {GridIconProps} props - Props passed to the SVG element for customization.
 * @returns {JSX.Element} The GridIcon SVG component.
 */
function GridIcon(props: GridIconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M5 28h2V4H5v24zm5 0h2V4h-2v24zm5 0h2V4h-2v24zm5 0h2V4h-2v24zm5-24v24h2V4h-2z" />
    </svg>
  );
}

export default GridIcon;
