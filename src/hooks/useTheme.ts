import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = Cookies.get("theme") as Theme;
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      return "dark";
    return "light";
  });

  const changeTheme = (newTheme: Theme): void => {
    setTheme(newTheme);
    Cookies.set("theme", newTheme, {
      expires: 365,
      secure: true,
      sameSite: "strict",
    });
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return { theme, changeTheme };
}
