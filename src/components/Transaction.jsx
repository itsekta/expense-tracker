/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { FaPizzaSlice, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosGift } from "react-icons/io";
import { GiRollingSuitcase } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";

const trialExpensesData = [
  {
    id: 1,
    title: "test_01",
    date: "March 15, 2024",
    price: "15",
    category: "food",
  },
  {
    id: 2,
    title: "test_02",
    date: "March 16, 2024",
    price: "25",
    category: "travel",
  },
  {
    id: 3,
    title: "test_03",
    date: "March 10, 2024",
    price: "10",
    category: "entertainment",
  },
  {
    id: 4, // Changed to ensure unique keys
    title: "test_04",
    date: "March 13, 2024",
    price: "30",
    category: "food",
  },
];

const RecentTransaction = () => {
  const [pageNum, setPage] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    handleRenderList();
    // eslint-disable-next-line
  }, [pageNum]);

  const handleRenderList = () => {
    const start = pageNum * itemsPerPage;
    setList(trialExpensesData.slice(start, start + itemsPerPage));
  };

  const [renderingList, setList] = useState(
    trialExpensesData.slice(0, itemsPerPage)
  );

  const containerStyle = {
    border: "1px solid white",
    background: "whitesmoke",
    borderRadius: "15px",
    marginTop: "1rem",
    color: "black",
    flex: "1",
  };

  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid gray",
    marginBottom: "1rem",
    padding: "0 1rem 0.5rem 0.5rem",
  };

  const iconContainerStyle = {
    width: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    background: "#bfbfbf",
    fontSize: "1.25rem",
    color: "#4c4c4c",
  };

  const amountStyle = {
    padding: 0,
    margin: 0,
    fontSize: "1.1rem",
    color: "#F4BB4A",
    fontWeight: 700,
  };

  const buttonStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "red",
    borderRadius: "15px",
    width: "2rem",
    height: "2rem",
    padding: "0.25rem",
    cursor: "pointer",
  };

  const pageButtonStyle = {
    padding: "1rem",
    background: "aliceblue",
    borderRadius: "50%",
    boxShadow: "0px 4px 4px grey",
    cursor: "pointer",
  };

  return (
    <div style={{ flex: "1" }}>
      <h2>Recent Transcation</h2>
      <div style={containerStyle}>
        <div style={{ padding: "1.5rem 1rem 1rem 1rem" }}>
          {renderingList?.map((item) => (
            <div key={item.id} style={itemStyle} type="button">
              <div style={{ display: "flex" }}>
                <div style={iconContainerStyle}>
                  {item.category === "travel" && <GiRollingSuitcase />}
                  {item.category === "food" && <FaPizzaSlice />}
                  {item.category === "entertainment" && <IoIosGift />}
                </div>

                <div style={{ paddingLeft: "1rem" }}>
                  <h6
                    style={{
                      padding: 0,
                      margin: 0,
                      fontSize: "1.1rem",
                      fontWeight: 500,
                    }}
                  >
                    {item.title}
                  </h6>
                  <p style={{ padding: 0, margin: 0, fontSize: "0.75rem" }}>
                    {item.date}
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  width: "20%",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <p style={amountStyle}>$ {item.price}</p>
                <div style={buttonStyle}>
                  <IoCloseCircleOutline
                    style={{ fontSize: "2rem", color: "white" }}
                  />
                </div>
                <div
                  style={{
                    ...buttonStyle,
                    background: "#F4BB4A",
                    borderRadius: "12px",
                  }}
                >
                  <MdOutlineEdit style={{ fontSize: "2rem", color: "white" }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0px 0px 16px",
          }}
        >
          <div
            style={{ ...pageButtonStyle, marginRight: "1rem" }}
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 0))}
          >
            <FaArrowLeft style={{ fontSize: "1.2rem" }} />
          </div>

          <div
            style={{
              background: "#43967B",
              padding: "0.5rem 1rem",
              color: "white",
              fontSize: "1.5rem",
              borderRadius: "15px",
              fontWeight: 400,
            }}
          >
            {pageNum + 1}
          </div>

          <div
            style={{ ...pageButtonStyle, marginLeft: "1rem" }}
            onClick={() =>
              setPage((prevPage) =>
                (pageNum + 1) * itemsPerPage < trialExpensesData.length
                  ? prevPage + 1
                  : prevPage
              )
            }
          >
            <FaArrowRight style={{ fontSize: "1.2rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransaction;
