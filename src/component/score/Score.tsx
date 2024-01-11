import React from "react";
import "./Score.scss";
import { useScore } from "../../hooks/useScore";
import { Legend, RadialBar, RadialBarChart } from "recharts";

export const Score = () => {
  const { scoreDatas } = useScore();
  const data = [scoreDatas];
  return (
    <>
      <div>Hello</div>
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="80%"
        barSize={10}
        data={data}>
        <RadialBar
          label={{ position: "insideStart", fill: "#fff" }}
          background
          dataKey="todayScore"
        />
        <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
      </RadialBarChart>
    </>
  );
};
