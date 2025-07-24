// utils/answerTracker.ts

const SCORE_KEY = "user_scores";

export function getAnswerData(user: string, date: string) {
  const allAnswers = JSON.parse(localStorage.getItem("answers") || "{}");
  return allAnswers?.[user]?.[date] || null;
}

export function saveAnswerData(
  user: string,
  date: string,
  data: {
    questionId: number;
    selected: string;
    correct: boolean;
    points: number;
  }
) {
  const allAnswers = JSON.parse(localStorage.getItem("answers") || "{}");

  if (!allAnswers[user]) {
    allAnswers[user] = {};
  }

  allAnswers[user][date] = data;
  localStorage.setItem("answers", JSON.stringify(allAnswers));
}

export function hasAnsweredToday(username: string, date: string): boolean {
  const answer = getAnswerData(username, date);
  return !!answer;
}

export function getCurrentUserScore(): number {
  const scores = JSON.parse(localStorage.getItem("user_scores") || "{}");
  return scores["you"] || 0;
}
