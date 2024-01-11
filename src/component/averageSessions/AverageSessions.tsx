import React from "react";
import { useAverageSessionsDatas } from "../../hooks/useAverageSessionsDatas";
import { Area, AreaChart, Tooltip, XAxis } from "recharts";

export const AverageSessions = () => {
  const { averageSessionsDatas } = useAverageSessionsDatas();
  return (
    <AreaChart
      width={730}
      height={250}
      data={averageSessionsDatas}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <XAxis dataKey="day" />
      <Tooltip />
      <Area type="monotone" dataKey="sessionLength" stroke="#FFFFFF" />
    </AreaChart>
  );
};
