import React, { useEffect, useState } from "react";
import { applyTheme, getInitialTheme } from "../../utils/theme";
import { MdDarkMode, MdLightMode, MdOutlineDarkMode } from "react-icons/md";
// import { getInitialTheme, applyTheme } from "../utils/theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <button className="" onClick={toggle}>
      {theme === "light" ? <MdOutlineDarkMode size={24 }/> : <MdLightMode size={24} />}
    </button>

  );
}
