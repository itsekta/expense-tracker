import ChartWrapper from "./ChartWrap";
import style from "./ExpenseTracker.module.css";
function ExpenseTracker() {
  return (
    <>
      <div>
        <h1>Expense Tracker</h1>
        <div className={style.expenseCard}>
          <div className={style.walletCard}>
            <div className={style.label}>
              Wallet Balance:{" "}
              <span className={style.price} style={{ color: "#9DFF5B" }}>
                &#8377;5000
              </span>
            </div>
            <div style={{ marginTop: "20px" }}>
              <button className={style.button}>+ Add Income</button>
            </div>
          </div>
          <div className={style.expenseInfo}>
            <div className={style.label}>
              Expenses:{" "}
              <span className={style.price} style={{ color: "#F4BB4A" }}>
                &#8377;500
              </span>
            </div>
            <div style={{ marginTop: "20px" }}>
              <button
                className={style.button}
                style={{
                  background:
                    "linear-gradient(90deg, #FF9595 0%, #FF4747 80%, #FF3838 100%)",
                }}
              >
                + Add Expense
              </button>
            </div>
          </div>
          <div className="chart">
            <ChartWrapper />
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpenseTracker;
