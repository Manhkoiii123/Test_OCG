import React from "react";

const HomeIcon = ({
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
        d="M1.875 10L9.33709 2.53792C9.7032 2.17181 10.2968 2.17181 10.6629 2.53792L18.125 10M3.75 8.12501V16.5625C3.75 17.0803 4.16973 17.5 4.6875 17.5H8.125V13.4375C8.125 12.9197 8.54473 12.5 9.0625 12.5H10.9375C11.4553 12.5 11.875 12.9197 11.875 13.4375V17.5H15.3125C15.8303 17.5 16.25 17.0803 16.25 16.5625V8.12501M6.875 17.5H13.75"
        stroke="#3F3F46"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HomeIcon;
