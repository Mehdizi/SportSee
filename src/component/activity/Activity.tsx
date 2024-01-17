import React from "react";
import "./Activity.scss";
import { useActivity } from "../../hooks/useActivity";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Activity = () => {
  const { activityDatas } = useActivity();
  const formattedActivityDatas = activityDatas.map((data, index) => {
    return { day: index + 1, kilogram: data.kilogram, calories: data.calories };
  });

  return (
    <div className="recharts-activity">
      <div className="legend-wrapper">
        <h3>Activité quotidienne</h3>
        <div className="parameters-wrapper">
          <div className="parameter">
            <div className="dot dark-grey" />
            <p>Poids (kg)</p>
          </div>
          <div className="parameter">
            <div className="dot dark-red" />
            <p>Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={formattedActivityDatas}
          barGap={10}
          barCategoryGap="40%"
          margin={{ top: 10, right: 10 }}>
          <CartesianGrid
            horizontal={true}
            vertical={false}
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="day"
            padding={{ left: -30, right: -30 }}
            tickLine={false}
          />
          <Tooltip
            formatter={(value: number, name: string) => [`${value} ${name}`]}
            cursor={{
              fill: "#000",
              fillOpacity: 0.1,
            }}
            labelStyle={{
              display: "none",
            }}
            contentStyle={{
              background: "#FF0101",
            }}
            itemStyle={{
              color: "#FFF",
            }}
          />
          <Bar
            dataKey="kilogram"
            name="kg"
            fill="#333"
            radius={[50, 50, 0, 0]}
            maxBarSize={10}
          />
          <Bar
            dataKey="calories"
            name="kCal"
            fill="#FF0101"
            radius={[50, 50, 0, 0]}
            maxBarSize={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickCount={4}
            orientation="right"
            domain={[0, "dataMax"]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
