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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useState } from "react";

type Condition = {
  point: number;
  createdAt: string;
};
// create dummy 10 dummy condition data
const data: Condition[] = Array.from({ length: 10 }, (_, i) => ({
  point: [0, 25, 50, 75, 100][Math.floor(Math.random() * 5)],
  createdAt: dayjs().subtract(i, "day").format("YYYY-MM-DD"),
}));

enum Period {
  Day = "day",
  Week = "week",
  Month = "month",
  Year = "year",
}

export const ConditionChrt = () => {
  const [period, setPeriod] = useState<Period>(Period.Day);
  const xTickFormatter = (date: string) => {
    switch (period) {
      case Period.Day:
        return dayjs(date).format("HH:mm");
      case Period.Week:
        return dayjs(date).format("DD(dd)");
      case Period.Month:
        return dayjs(date).format("MM");
      case Period.Year:
        return dayjs(date).format("YYYY");
    }
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

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-end">
        <Select onValueChange={(value: Period) => setPeriod(value)}>
          <SelectTrigger className="w-auto">{period}</SelectTrigger>
          <SelectContent>
            {Object.values(Period).map((value) => (
              <SelectItem key={value} value={value}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <ResponsiveContainer width="100%" height={200}>
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
