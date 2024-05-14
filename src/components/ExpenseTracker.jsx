import ChartWrapper from "./ChartWrap";
import style from "./ExpenseTracker.module.css";
function ExpenseTracker() {
  return (
    <>
      <div>
        <h1>Expense Tracker</h1>
        <div className={style.expenseCard}>
          <div className={style.walletCard}>
            <div>
              Wallet Balance: <span>&#8377;5000</span>
              <div>
                <button className={style.button}>+ Add Income</button>
              </div>
            </div>
          </div>
          <div className={style.expenseInfo}>
            Expenses: <span>&#8377;500</span>
            <div>
              <button className={style.button}>+ Add Expense</button>
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
