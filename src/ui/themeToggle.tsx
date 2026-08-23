"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return;
  }
  return (
    <div
      onClick={() => {
        if(theme === 'light'){setTheme('dark')}
        if(theme === 'dark'){setTheme('light')}
      }}
      className={`bg-primary rounded-full fixed bottom-5 right-5 z-50 p-3.5 cursor-pointer`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 16 16"
        className={`text-black dark:text-white`}
      >
        <path d="M8 15V1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm6 1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
      </svg>
    </div>
  );
};

export default ThemeToggle;
