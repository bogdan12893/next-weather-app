"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Light from "./icons/Light";
import Dark from "./icons/Dark";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex w-full justify-end">
      <div className="theme-switch">
        {currentTheme === "dark" ? (
          <button onClick={() => setTheme("light")}>
            <Light />
          </button>
        ) : (
          <button onClick={() => setTheme("dark")}>
            <Dark />
          </button>
        )}
      </div>
    </div>
  );
}
