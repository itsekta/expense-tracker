import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import styles from "./ChartWrap.module.css";
const data = [
  { name: "Entertainment", value: 70, color: "#FF9304" },
  { name: "Food", value: 30, color: "#A000FF" },
  { name: "Travel", value: 10, color: "#FDE006" },
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  value,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${value}%`}
    </text>
  );
};

export default function PieChartComponent() {
  return (
    <>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx={100}
          cy={100}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
      <div className={styles.expensesBarWrap}>
        {data.map((item) => (
          <div className={styles.expensesBar}>
            <div
              style={{
                height: "16px",
                width: "16px",
                backgroundColor: item.color,
              }}
            ></div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
