/* eslint-disable no-unused-vars */
import React from "react";

const expensesCategoryList = [
  {
    id: 1,
    title: "entertainment",
    totalExpense: 700,
  },
  {
    id: 2,
    title: "food",
    totalExpense: 300,
  },

  {
    id: 3,
    title: "travel",
    totalExpense: 150,
  },
];

const TopExpenses = () => {
  return (
    <div style={{ flex: "1" }}>
      <h2>Top Expenses</h2>
      <div
        style={{
          border: "1px solid white",
          background: "whitesmoke",
          borderRadius: "15px",
          marginTop: "1rem",
          color: "black",
          flex: "1",
        }}
      >
        <div style={{ padding: "2rem" }}>
          {expensesCategoryList.map((item) => (
            <div
              key={item.id}
              style={{
                padding: "1rem 0",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  margin: 0,
                  textTransform: "capitalize",
                  width: "10rem",
                }}
              >
                {item.title}
              </p>

              <div
                style={{
                  width: `${item.totalExpense / 10}%`,
                  background: "#8784D2",
                  border: "1px solid #9568ff",
                  borderRadius: "0 15px 15px 0",
                  height: "0.75rem",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopExpenses;
