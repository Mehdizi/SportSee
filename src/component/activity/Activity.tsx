import React from "react";
import "./Activity.scss";
import { useActivity } from "../../hooks/useActivity";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis } from "recharts";

export const Activity = () => {
  const { activityDatas } = useActivity();
  return (
    <BarChart width={730} height={250} data={activityDatas}>
      <CartesianGrid strokeDasharray="3" />
      <XAxis dataKey="day" />
      <Tooltip />
      <Bar dataKey="kilogram" fill="#8884d8" />
      <Bar dataKey="calories" fill="#82ca9d" />
    </BarChart>
  );
};
