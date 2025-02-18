import React from "react";

const GlassIcon = ({
  width = 18,
  height = 18,
  fill = "none",
}: {
  width?: number;
  height?: number;
  fill?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill={fill}
    >
      <path
        d="M16.5 16.5L12.1694 12.1694M12.1694 12.1694C13.3004 11.0384 14 9.47589 14 7.75C14 4.29822 11.2018 1.5 7.75 1.5C4.29822 1.5 1.5 4.29822 1.5 7.75C1.5 11.2018 4.29822 14 7.75 14C9.47589 14 11.0384 13.3004 12.1694 12.1694Z"
        stroke="#3F3F46"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GlassIcon;
