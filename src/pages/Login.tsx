import { Container, TextField, Button, Typography, Box } from "@mui/material";

export default function Login() {
  return (
    <Container maxWidth="sm">
      <Box mt={10} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <TextField fullWidth label="Email" variant="outlined" margin="normal" />
        <Button variant="contained" fullWidth>
          Login (mock)
        </Button>
      </Box>
    </Container>
  );
}
