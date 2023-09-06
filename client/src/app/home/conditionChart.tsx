"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";

type Condition = {
  point: number;
  createdAt: string;
};
// create dummy 10 dummy condition data
const data: Condition[] = Array.from({ length: 10 }, (_, i) => ({
  point: [0, 25, 50, 75, 100][Math.floor(Math.random() * 5)],
  createdAt: dayjs().subtract(i, "day").format("YYYY-MM-DD"),
}));

const xTickFormatter = (date: string) => {
  return dayjs(date).format("D(dd)");
};

const formatter = (value: number) => {
  let emoji;
  switch (value) {
    case 100:
      emoji = "😆";
      break;
    case 75:
      emoji = "😁";
      break;
    case 50:
      emoji = "😐";
      break;
    case 25:
      emoji = "🥲";
      break;
    case 0:
      emoji = "😭";
      break;
    default:
      emoji = "";
  }
  return emoji;
};

export const ConditionChrt = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ left: -20, right: 20 }}>
          <Line type="monotone" dataKey="point" stroke="#F894C6" />
          <XAxis dataKey="createdAt" tickFormatter={xTickFormatter} />
          <YAxis ticks={[0, 25, 50, 75, 100]} tickFormatter={formatter} />
          <Tooltip formatter={formatter} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
