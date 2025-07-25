import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { mockCourses } from "../data/courses";
import { useAuth } from "../context/AuthContext";

export default function Courses() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h4" gutterBottom color="primary">
        All Courses
      </Typography>

      <Grid container spacing={3}>
        {mockCourses.map((course) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={course.id}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <Box>
                <Typography variant="h6" color="primary" gutterBottom>
                  {course.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {course.description}
                </Typography>
                {user && (
                  <Typography variant="body2" fontWeight={500}>
                    Completed: <strong>{course.completedPercent}%</strong>
                  </Typography>
                )}
              </Box>

              <Box mt={3}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => navigate(`/courses/${course.id}`)}
                >
                  Start Learning
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
