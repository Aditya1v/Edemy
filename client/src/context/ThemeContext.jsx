// import { createContext, useEffect, useState } from "react";

// export const ThemeContext = createContext();

// const getSystemTheme = () => {
//   return window.matchMedia("(prefers-color-scheme: dark)").matches
//     ? "dark"
//     : "light";
// };

// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || "system"
//   );

//   const applyTheme = (currentTheme) => {
//     const root = document.documentElement;

//     if (currentTheme === "dark") {
//       root.classList.add("dark");
//     } else if (currentTheme === "light") {
//       root.classList.remove("dark");
//     } else {
//       // system
//       const systemTheme = getSystemTheme();
//       if (systemTheme === "dark") {
//         root.classList.add("dark");
//       } else {
//         root.classList.remove("dark");
//       }
//     }
//   };

//   useEffect(() => {
//     applyTheme(theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   // 👇 Listen to system changes (important)
//   useEffect(() => {
//     if (theme !== "system") return;

//     const media = window.matchMedia("(prefers-color-scheme: dark)");

//     const handler = () => applyTheme("system");

//     media.addEventListener("change", handler);

//     return () => media.removeEventListener("change", handler);
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeProvider;