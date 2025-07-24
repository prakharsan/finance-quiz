import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Leaderboard", path: "/leaderboard" },
    { label: "Login", path: "/login" },
    { label: "Admin", path: "/admin" },
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            💰 FinEd
          </Typography>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              color="inherit"
              variant={location.pathname === item.path ? "outlined" : "text"}
              sx={{ ml: 1 }}
            >
              {item.label}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 2 }}>{children}</Box>
    </>
  );
}
