import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
} from "@mui/material";

const mockLeaderboard = [
  { name: "Alice", points: 90 },
  { name: "Bob", points: 75 },
  { name: "You", points: 65 },
];

export default function Leaderboard() {
  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            🏆 Leaderboard
          </Typography>
          <List>
            {mockLeaderboard.map((user, i) => (
              <ListItem key={i} divider>
                <ListItemText
                  primary={`${i + 1}. ${user.name}`}
                  secondary={`${user.points} pts`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Container>
  );
}
