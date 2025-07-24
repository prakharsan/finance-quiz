import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  useTheme,
} from "@mui/material";
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
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          width: 350,
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ textAlign: "center" }}>
          Login
        </Typography>

        <TextField
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          InputLabelProps={{ shrink: false }} // Optional now
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#90caf9",
              },
              "&:hover fieldset": {
                borderColor: "#64b5f6",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#42a5f5",
              },
            },
          }}
        />

        <TextField
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          InputLabelProps={{ shrink: false }} // optional
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#90caf9",
              },
              "&:hover fieldset": {
                borderColor: "#64b5f6",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#42a5f5",
              },
            },
          }}
        />

        {error && (
          <Typography color="error" sx={{ mb: 2, textAlign: "center" }}>
            {error}
          </Typography>
        )}

        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          sx={{
            fontWeight: 600,
            borderRadius: 2,
            mb: 2,
            "&:hover": {
              bgcolor: "#00acc1",
            },
          }}
        >
          LOGIN
        </Button>

        <Button
          fullWidth
          variant="outlined"
          sx={{
            fontWeight: 500,
            borderRadius: 2,
            "&:hover": {
              borderColor: "#00acc1",
              color: "#00acc1",
            },
          }}
        >
          REGISTER
        </Button>
      </Paper>
    </Box>
  );
}
