import { useState, useEffect } from "react";
import {
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
  Paper,
  Grid,
  LinearProgress,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

import { useAuth } from "../context/AuthContext";
import { saveAnswerData, getAnswerData } from "../utils/answerTracker";
import { dailyQuestions } from "../data/dailyQuestion";
import AnswerCalendar from "../components/AnswerCalendar";
import { termOfTheDayList } from "../data/termOfTheDay";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

// Get today's term based on exact date
const today = dayjs().format("YYYY-MM-DD");
const todayTerm = termOfTheDayList.find((term) => term.date === today);

export default function Home() {
  const theme = useTheme();
  const { user } = useAuth();
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());

  const formattedDate = selectedDate.format("YYYY-MM-DD");
  const question = dailyQuestions.find((q) => q.date === formattedDate);

  useEffect(() => {
    if (!user) return;

    const answerData = getAnswerData(user, formattedDate);
    if (answerData) {
      setSelected(answerData.selected);
      setSubmitted(true);
    } else {
      setSelected("");
      setSubmitted(false);
    }
  }, [user, formattedDate]);

  const handleSubmit = () => {
    if (!user || !question) return;

    console.log("this is selected", selected);
    console.log("this is question.correct", question.correct);

    const isCorrect = selected === question.correct;
    console.log("this is isCorrect", isCorrect);

    saveAnswerData(user, formattedDate, {
      questionId: question.id,
      selected,
      correct: isCorrect,
      points: isCorrect ? 10 : 0,
    });

    const username = user;

    const scores = JSON.parse(localStorage.getItem("user_scores") || "{}");
    scores[username] = (scores[username] || 0) + (isCorrect ? 10 : 0);
    localStorage.setItem("user_scores", JSON.stringify(scores));

    const coins = JSON.parse(localStorage.getItem("user_coins") || "{}");
    coins[username] = (coins[username] || 0) + (isCorrect ? 10 : 0);
    localStorage.setItem("user_coins", JSON.stringify(coins));

    setSubmitted(true);
  };

  const course = {
    title: "Saving & Budgeting 101",
    completedPercent: 60,
  };

  const navigate = useNavigate();

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 9 }} sx={{ height: "100%" }}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h5" color="primary" gutterBottom>
                📅 Daily Finance Quiz - {formattedDate}
              </Typography>

              {question ? (
                <>
                  <Typography variant="subtitle1" gutterBottom>
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
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={handleSubmit}
                    disabled={!selected || submitted || !user}
                  >
                    {user
                      ? submitted
                        ? "Submitted"
                        : "Submit Answer"
                      : "Login to answer"}
                  </Button>

                  {submitted && (
                    <Box mt={3}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color:
                            selected === question.correct
                              ? "success.main"
                              : "error.main",
                        }}
                      >
                        {selected === question.correct
                          ? "Correct!"
                          : "Incorrect."}
                      </Typography>

                      {selected !== question.correct && (
                        <Box mt={2}>
                          <Typography variant="body2" color="text.secondary">
                            Correct Answer:{" "}
                            <strong>
                              {question.correct.toUpperCase()}.{" "}
                              {question.options[question.correct]}
                            </strong>
                          </Typography>
                          <Typography variant="body2" mt={1}>
                            💡 {question.explanation}
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  )}
                </>
              ) : (
                <Typography variant="body1" mt={2}>
                  📭 No question available for this date.
                </Typography>
              )}
            </Box>
          </Paper>
        </Grid>

        {/* Right Side: Calendar */}
        <Grid size={{ xs: 12, md: 3 }} sx={{ height: "100%" }}>
          <Paper
            elevation={3}
            sx={{
              p: 2,
              borderRadius: 3,
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box sx={{ flexGrow: 1, overflow: "hidden" }}>
                <AnswerCalendar
                  selectedDate={selectedDate}
                  onChange={setSelectedDate}
                  user={user}
                />
              </Box>
            </LocalizationProvider>
          </Paper>
        </Grid>
        {/* Term of the Day */}
        <Grid size={{ xs: 12, md: 6 }}>
          {todayTerm ? (
            <Paper
              elevation={6}
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderLeft: "6px solid #00e676",
                borderRadius: 3,
                minHeight: "220px",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              <Box display="flex" alignItems="center" mb={1}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600 }}
                  color="primary"
                >
                  Term of the Day
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, mb: 1 }}
                color="primary"
              >
                {todayTerm.term}
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: 1.6 }}
                color="primary"
              >
                {todayTerm.explanation}
              </Typography>
            </Paper>
          ) : (
            <Paper sx={{ p: 2 }}>
              <Typography>No term for today yet.</Typography>
            </Paper>
          )}
        </Grid>

        {/* Mini Modules */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Paper
            elevation={6}
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderLeft: "6px solid #00e676",
              borderRadius: 3,
              minHeight: "220px",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            }}
          >
            <Box display="flex" alignItems="center" mb={1}>
              <Typography variant="h6" sx={{ fontWeight: 600 }} color="primary">
                Mini Lessons
              </Typography>
            </Box>

            {user ? (
              <>
                <Typography
                  variant="h5"
                  color="primary"
                  sx={{ fontWeight: 600, mb: 1 }}
                >
                  {course.title}
                </Typography>

                <Box sx={{ mt: 2 }}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mb: 0.5 }}
                  >
                    Progress: {course.completedPercent}%
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={course.completedPercent}
                    sx={{
                      height: 8,
                      borderRadius: 5,
                      backgroundColor: "#f0f0f0",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: theme.palette.primary.main,
                      },
                    }}
                  />
                </Box>
              </>
            ) : (
              <>
                <Typography
                  variant="body1"
                  color="primary"
                  sx={{ fontWeight: 500, mb: 2 }}
                >
                  Explore bite-sized finance courses to build your money skills!
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  Login to start tracking your progress and earn rewards.
                </Typography>
              </>
            )}

            <Box mt={3}>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderColor: "primary",
                  color: "primary",
                  textTransform: "none",
                  fontWeight: 500,
                }}
                onClick={() => {
                  navigate("/courses");
                }}
              >
                See All Courses
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
