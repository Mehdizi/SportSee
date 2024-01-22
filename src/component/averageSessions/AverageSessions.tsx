import React from "react";
import "./AverageSessions.scss";
import { useAverageSessionsDatas } from "../../hooks/useAverageSessionsDatas";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const AverageSessions = () => {
  const { averageSessionsDatas } = useAverageSessionsDatas();

  const dayNameByFirstLetter: Record<number, string> = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
  };

  const legendContent = () => {
    return (
      <p
        className="
    average-legend">
        Durée moyenne des sessions
      </p>
    );
  };

  const formattedAverageSessionsDatas = averageSessionsDatas.map((data) => {
    return {
      day: dayNameByFirstLetter[data.day],
      sessionLength: data.sessionLength,
    };
  });
  return (
    <div className="recharts-average-sessions">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedAverageSessionsDatas}
          margin={{ top: 0, left: 15, right: 15, bottom: 10 }}>
          <XAxis
            dataKey="day"
            stroke="#FFF"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#ffffff", fontWeight: 500, fontSize: 14 }}
          />
          <YAxis hide={true} />
          <Legend verticalAlign="top" align="left" content={legendContent} />
          <Tooltip
            formatter={(sessionLength: number) => [`${sessionLength} min`]}
            cursor={{
              stroke: "#000",
              strokeOpacity: 0.1,
              strokeWidth: 40,
            }}
            labelStyle={{
              display: "none",
            }}
            itemStyle={{
              color: "#000",
            }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            strokeWidth={1.5}
            dot={false}
            activeDot={{
              stroke: "#FFF",
              strokeOpacity: 0.4,
              strokeWidth: 10,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
