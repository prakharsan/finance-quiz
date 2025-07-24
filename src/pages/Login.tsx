import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { users } from "../data/users";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const matched = users.find(
      (u) => u.username === username && u.password === password
    );
    if (matched) {
      login(matched.username);
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      maxWidth={300}
      mx="auto"
      mt={8}
    >
      <Typography variant="h5">Login</Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
}
