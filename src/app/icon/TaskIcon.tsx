import React from "react";

const TaskIcon = ({
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
        d="M4.50008 9.75L6.75008 12L13.5001 5.25M4.83333 16.5H13.1667C15.0076 16.5 16.5 15.0076 16.5 13.1667V4.83333C16.5 2.99238 15.0076 1.5 13.1667 1.5H4.83333C2.99238 1.5 1.5 2.99238 1.5 4.83333V13.1667C1.5 15.0076 2.99238 16.5 4.83333 16.5Z"
        stroke="#3F3F46"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TaskIcon;
