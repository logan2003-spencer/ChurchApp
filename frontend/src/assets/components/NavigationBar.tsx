import React from "react";

interface NavigationBarProps {
  onBackClick?: () => void;
  onMenuClick?: () => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  onBackClick,
  onMenuClick,
}) => {
  return (
    <nav className="flex justify-between items-center px-8 py-2 bg-cyan-700 h-[62px]">
      <button
        className="bg-transparent border-none cursor-pointer"
        onClick={onBackClick}
        aria-label="Go back"
      >
        <svg
          width="47"
          height="48"
          viewBox="0 0 47 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="back-icon"
        >
          <path
            d="M15.324 25.9583L26.2906 36.925L23.5 39.6667L7.83333 24L23.5 8.33334L26.2906 11.075L15.324 22.0417H39.1667V25.9583H15.324Z"
            fill="white"
          ></path>
        </svg>
      </button>

      <button
        className="bg-transparent border-none cursor-pointer"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <svg
          width="38"
          height="40"
          viewBox="0 0 38 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="menu-icon"
        >
          <path
            d="M4.75 20H33.25M4.75 10H33.25M4.75 30H33.25"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    </nav>
  );
};

export default NavigationBar;
