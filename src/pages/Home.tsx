import { useState } from "react";
import {
  Container,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
  Paper,
} from "@mui/material";

const question = {
  text: "What percentage of your income should you ideally save?",
  options: {
    a: "10%",
    b: "20%",
    c: "50%",
    d: "80%",
  },
  correct: "b",
};

export default function Home() {
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            📆 Today's Question
          </Typography>
          <Typography variant="body1" gutterBottom>
            {question.text}
          </Typography>

          <RadioGroup
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            {Object.entries(question.options).map(([key, value]) => (
              <FormControlLabel
                key={key}
                value={key}
                control={<Radio />}
                label={`${key.toUpperCase()}. ${value}`}
                disabled={submitted}
              />
            ))}
          </RadioGroup>

          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!selected || submitted}
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit
          </Button>

          {submitted && (
            <Typography
              sx={{ mt: 2 }}
              color={selected === question.correct ? "green" : "red"}
            >
              {selected === question.correct ? "✅ Correct!" : "❌ Incorrect."}
            </Typography>
          )}
        </Paper>
      </Box>
    </Container>
  );
}
