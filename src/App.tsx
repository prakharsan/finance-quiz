// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Layout from "./components/Layout";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { lightTheme, darkTheme } from "./theme";
import Courses from "./pages/Courses";

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const stored = localStorage.getItem("theme");
    return stored === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout isDark={isDark} toggleTheme={() => setIsDark((prev) => !prev)}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
