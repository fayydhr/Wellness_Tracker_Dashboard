import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Legend,
  CartesianGrid,
} from "recharts";

export default function MoodChart({ moodData }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full">
      <h2 className="text-lg font-bold mb-4 text-primaryRed">Perubahan Mood Mingguan</h2>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart
          data={moodData}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorHappy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#C21224" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#C21224" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient id="colorNeutral" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#E6E6E6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#E6E6E6" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient id="colorSad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="date" tickLine={false} axisLine={{ stroke: "#ccc" }} />
          <YAxis
            tickLine={false}
            axisLine={{ stroke: "#ccc" }}
            label={{ value: "Mood Score", angle: -90, position: "insideLeft", offset: 0 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
          <Legend verticalAlign="top" height={36} />
          <Area
            type="monotone"
            dataKey="Happy"
            stackId="1"
            stroke="#C21224"
            fill="url(#colorHappy)"
            activeDot={{ r: 6 }}
          />
          <Area
            type="monotone"
            dataKey="Neutral"
            stackId="1"
            stroke="#E6E6E6"
            fill="url(#colorNeutral)"
            activeDot={{ r: 6 }}
          />
          <Area
            type="monotone"
            dataKey="Sad"
            stackId="1"
            stroke="#3B82F6"
            fill="url(#colorSad)"
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
