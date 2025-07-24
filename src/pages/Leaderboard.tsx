import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
  Grid,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { staticScores, LeaderboardEntry } from "../data/staticScores";
import { getCurrentUserScore } from "../utils/answerTracker";
import {} from "@mui/material";

type Reward = {
  name: string;
  cost: number;
};

const rewards: Reward[] = [
  { name: "Coffee Mug", cost: 30 },
  { name: "Notebook", cost: 10 },
  { name: "Amazon Voucher ₹100", cost: 100 },
  { name: "T-Shirt", cost: 300 },
  { name: "Bluetooth Earbuds", cost: 1000 },
];

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [userScore, setUserScore] = useState<number>(0);
  const [userRank, setUserRank] = useState<number | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);
  const [contact, setContact] = useState({ name: "", email: "", address: "" });
  const [userCoins, setUserCoins] = useState<number>(0);

  useEffect(() => {
    const currentUserRaw = getCurrentUserScore();
    const score = currentUserRaw ?? 0;

    const coinData = JSON.parse(localStorage.getItem("user_coins") || "{}");
    const coins = coinData["you"] ?? 0;

    const currentUser: LeaderboardEntry = {
      uid: "you",
      name: "You",
      score,
    };

    const combined = [...staticScores, currentUser].sort(
      (a, b) => b.score - a.score
    );

    const userRank = combined.findIndex((entry) => entry.uid === "you") + 1;

    setLeaderboard(combined);
    setUserScore(score);
    setUserCoins(coins);
    setUserRank(userRank);
  }, []);

  const handleRedeem = (reward: Reward) => {
    setSelectedReward(reward);
    setOpenDialog(true);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box mt={6}>
          <Grid container spacing={4}>
            {/* Leaderboard Panel */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={4}
                sx={{ p: 3, height: "100%", minHeight: 500 }}
              >
                <Typography variant="h5" gutterBottom>
                  🏆 Leaderboard
                </Typography>
                {userRank && (
                  <Box
                    sx={{
                      p: 2,
                      mb: 2,
                      borderRadius: 2,
                      backgroundColor: "#e3f2fd",
                      border: "1px solid #90caf9",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      color="primary"
                      fontWeight="bold"
                    >
                      Your Rank: #{userRank}
                    </Typography>
                    <Typography variant="body2" color="primary">
                      Score: {userScore} pts
                    </Typography>
                  </Box>
                )}
                <List
                  sx={{
                    maxHeight: "70vh",
                    overflowY: "auto",
                  }}
                >
                  {leaderboard.map((user, i) => {
                    const isCurrentUser = user.uid === "you";

                    return (
                      <ListItem
                        key={user.uid}
                        divider
                        sx={{
                          bgcolor: isCurrentUser ? "#e3f2fd" : "inherit",
                          borderRadius: 1,
                        }}
                      >
                        <ListItemText
                          primary={
                            <Typography
                              sx={{ fontWeight: isCurrentUser ? 700 : 400 }}
                              color={
                                isCurrentUser ? "primary.main" : "text.primary"
                              }
                            >
                              {`${i + 1}. ${user.name}`}
                            </Typography>
                          }
                          secondary={
                            <Typography
                              sx={{ fontWeight: isCurrentUser ? 600 : 400 }}
                              color={
                                isCurrentUser
                                  ? "primary.dark"
                                  : "text.secondary"
                              }
                            >
                              {`${user.score} pts`}
                            </Typography>
                          }
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </Paper>
            </Grid>

            {/* Rewards Panel */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper elevation={4} sx={{ p: 3, minHeight: "70vh" }}>
                <Typography variant="h5" gutterBottom>
                  🎁 Redeem Rewards
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  Your coins: <strong>{userCoins}</strong>
                </Typography>

                <Divider sx={{ mb: 2 }} />
                <Box display="flex" flexDirection="column" gap={2}>
                  {rewards.map((reward, i) => (
                    <Box
                      key={i}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        backgroundColor:
                          userScore >= reward.cost ? "#e6ffed" : "#f0f0f0",
                        border: "1px solid",
                        borderColor:
                          userScore >= reward.cost ? "#81c784" : "#ccc",
                        cursor:
                          userScore >= reward.cost ? "pointer" : "not-allowed",
                        opacity: userScore >= reward.cost ? 1 : 0.6,
                        transition: "0.3s",
                        "&:hover": {
                          boxShadow: userScore >= reward.cost ? 4 : "none",
                        },
                      }}
                      onClick={() => {
                        if (userScore >= reward.cost) {
                          handleRedeem(reward);
                        }
                      }}
                    >
                      <Typography
                        variant="body1"
                        color="primary"
                        fontWeight="bold"
                      >
                        {reward.name}
                      </Typography>
                      <Typography color="primary" variant="caption">
                        Requires {reward.cost} pts
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Redeem: {selectedReward?.name}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="dense"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
          <TextField
            label="Email"
            fullWidth
            margin="dense"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
          <TextField
            label="Address"
            fullWidth
            margin="dense"
            multiline
            minRows={2}
            value={contact.address}
            onChange={(e) =>
              setContact({ ...contact, address: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button
            variant="contained"
            disabled={!contact.name || !contact.email || !contact.address}
            onClick={() => {
              if (!selectedReward) return;
              const newCoins = userCoins - selectedReward.cost;
              setUserCoins(newCoins);

              const coins = JSON.parse(
                localStorage.getItem("user_coins") || "{}"
              );
              coins["you"] = newCoins;
              localStorage.setItem("user_coins", JSON.stringify(coins));

              // Optional: Send contact info to backend
              console.log("Redeemed:", selectedReward.name);
              console.log("Contact Info:", contact);

              setOpenDialog(false);
              setSelectedReward(null);
              setContact({ name: "", email: "", address: "" });

              alert(`🎉 You have redeemed ${selectedReward.name}!`);
            }}
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
