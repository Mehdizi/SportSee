import React from "react";
import "./Performances.scss";
import { usePerformances } from "../../hooks/usePerformances";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

export const Performances = () => {
  const { performancesDatas } = usePerformances();

  // const translations = {
  //   1: "Cardio",
  //   2: "Énergie",
  //   3: "Endurance",
  //   4: "Force",
  //   5: "Vitesse",
  //   6: "Intensité",
  // };

  const formattedPerformancesDatas = performancesDatas.data.map(
    ({ value, kind }) => {
      return { value, kind: performancesDatas.kind[kind] };
    }
  );
  const data = formattedPerformancesDatas;
  return (
    <div className="performances-wrapper">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="60%" data={data}>
          <PolarGrid
            radialLines={false}
            stroke="#FFFFFF"
            polarRadius={[10, 20, 35, 50]}
          />
          <PolarAngleAxis
            dataKey="kind"
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
            stroke="#FFFFFF"
            tickLine={false}
          />
          <Radar
            dataKey="value"
            name="performances"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
