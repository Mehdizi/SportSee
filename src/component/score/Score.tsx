import React from "react";
import "./Score.scss";
import { useScore } from "../../hooks/useScore";
import { Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

export const Score = () => {
  const { score } = useScore();

  const scoreInPercent = score * 100;

  const data = [
    {
      value: scoreInPercent,
    },
  ];

  const counterClockwiseCalculation = 430 * score + 70;

  return (
    <div className="recharts-score-wrapper">
      <h3 className="score-title">Score</h3>
      <div className="score-legend">
        <p className="score-legend-percent">{scoreInPercent}%</p>
        <p className="score-legend-text">
          de votre
          <br />
          objectif
        </p>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            fill="#FF0000"
            startAngle={70}
            endAngle={counterClockwiseCalculation}
            innerRadius="65%"
            outerRadius="75%"
            cornerRadius="50%"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
