import React from "react";

const HelpIcon = ({
  width = 20,
  height = 20,
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
      viewBox="0 0 20 20"
      fill={fill}
    >
      <path
        d="M8.23242 6.2657C9.20873 5.41143 10.7916 5.41143 11.768 6.2657C12.7443 7.11998 12.7443 8.50502 11.768 9.3593C11.598 9.50798 11.4097 9.63079 11.2094 9.72772C10.588 10.0285 10.0002 10.5596 10.0002 11.25V11.875M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10ZM10 14.375H10.0063V14.3813H10V14.375Z"
        stroke="#3F3F46"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HelpIcon;
