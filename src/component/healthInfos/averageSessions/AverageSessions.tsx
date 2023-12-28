import React from "react";
import { useAverageSessionsDatas } from "../../../hooks/useAverageSessionsDatas";
import { Line, LineChart } from "recharts";

export const AverageSessions = () => {
  const { AverageSessionsInfos } = useAverageSessionsDatas;
  return (
    <LineChart width={300} height={100} data={AverageSessionsInfosdata}>
      <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
  );
};
