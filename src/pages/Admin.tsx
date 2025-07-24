import { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  Box,
  Paper,
} from "@mui/material";

export default function Admin() {
  type OptionKey = "a" | "b" | "c" | "d";

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<Record<OptionKey, string>>({
    a: "",
    b: "",
    c: "",
    d: "",
  });
  const [correct, setCorrect] = useState("");

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            🧑‍💼 Add New Question
          </Typography>
          <TextField
            fullWidth
            label="Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            margin="normal"
          />
          {(["a", "b", "c", "d"] as OptionKey[]).map((opt) => (
            <TextField
              key={opt}
              fullWidth
              label={`Option ${opt.toUpperCase()}`}
              value={options[opt]}
              onChange={(e) =>
                setOptions({ ...options, [opt]: e.target.value })
              }
              margin="normal"
            />
          ))}

          <TextField
            fullWidth
            label="Correct Option (a/b/c/d)"
            value={correct}
            onChange={(e) => setCorrect(e.target.value)}
            margin="normal"
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={() => alert("Question added (mock)")}
          >
            Submit
          </Button>
        </Paper>
      </Box>
    </Container>
  );
}
