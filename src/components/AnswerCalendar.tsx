import React from "react";
import { DateCalendar, PickersDay, PickersDayProps } from "@mui/x-date-pickers";
import { Box, Tooltip } from "@mui/material";
import { Dayjs } from "dayjs";
import { getAnswerData } from "../utils/answerTracker";

type AnswerCalendarProps = {
  selectedDate: Dayjs;
  onChange: (date: Dayjs) => void;
  user: string | null;
};

export default function AnswerCalendar({
  selectedDate,
  onChange,
  user,
}: AnswerCalendarProps) {
  return (
    <DateCalendar
      value={selectedDate}
      onChange={(date) => date && onChange(date)}
      disableFuture
      sx={{ width: "100%", height: "100%" }}
      slots={{ day: (props) => <CustomDay {...props} user={user} /> }}
    />
  );
}

function CustomDay(props: PickersDayProps & { user: string | null }) {
  const { day, user, ...other } = props;
  const formatted = day.format("YYYY-MM-DD");

  let status: "correct" | "incorrect" | null = null;

  if (user) {
    const data = getAnswerData(user, formatted);
    if (data) {
      status = data.correct ? "correct" : "incorrect";
    }
  }

  return (
    <Tooltip
      title={
        status
          ? `${formatted}: ${status === "correct" ? "Correct" : "Incorrect"}`
          : ""
      }
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <PickersDay
          {...other}
          day={day}
          sx={{
            ...(status === "correct" && {
              backgroundColor: "rgba(76, 175, 80, 0.3)", // green shade
              borderRadius: "50%",
            }),
            ...(status === "incorrect" && {
              backgroundColor: "rgba(244, 67, 54, 0.3)", // red shade
              borderRadius: "50%",
            }),
          }}
        />
      </Box>
    </Tooltip>
  );
}
