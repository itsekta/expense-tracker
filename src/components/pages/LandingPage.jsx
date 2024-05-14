import { useEffect, useState, useCallback } from "react";
import Card from "../widgets/Card/Card";
import styles from "./LandingPage.module.css";
import TransactionList from "../widgets/TransactionList/TransactionList";
import ExpenseForm from "../widgets/Forms/ExpenseForm/ExpenseForm";
import Modal from "../widgets/Modal/Modal";
import AddBalanceForm from "../widgets/Forms/AddBalanceForm/AddBalanceForm";
import PieChart from "../widgets/PieChart/PieChart";
import BarChart from "../widgets/BarChart/BarChart";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

const calculateCategoryStats = (expenseList) => {
  return expenseList.reduce(
    (acc, item) => {
      acc.spends[item.category] =
        (acc.spends[item.category] || 0) + Number(item.price);
      return acc;
    },
    {
      spends: { food: 0, entertainment: 0, travel: 0 },
    }
  );
};

export default function Main() {
  const [balance, setBalance] = useLocalStorage("balance", 5000);
  const [expenseList, setExpenseList] = useLocalStorage("expenses", []);

  // Show hide modals
  const [isOpenExpense, setIsOpenExpense] = useState(false);
  const [isOpenBalance, setIsOpenBalance] = useState(false);

  const { spends: categorySpends } = calculateCategoryStats(expenseList);

  const expense = expenseList.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const handleAddIncome = useCallback(() => {
    setIsOpenBalance(true);
  }, []);

  const handleAddExpense = useCallback(() => {
    setIsOpenExpense(true);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Expense Tracker</h1>

      {/* Cards and pie chart wrapper */}
      <div className={styles.cardsWrapper}>
        <Card
          title="Wallet Balance"
          money={balance}
          buttonText="+ Add Income"
          buttonType="success"
          handleClick={handleAddIncome}
        />

        <Card
          title="Expenses"
          money={expense}
          buttonText="+ Add Expense"
          buttonType="failure"
          success={false}
          handleClick={handleAddExpense}
        />

        <PieChart
          data={[
            { name: "Food", value: categorySpends.food },
            { name: "Entertainment", value: categorySpends.entertainment },
            { name: "Travel", value: categorySpends.travel },
          ]}
        />
      </div>

      {/* Transactions and bar chart wrapper */}
      <div className={styles.transactionsWrapper}>
        <TransactionList
          transactions={expenseList}
          editTransactions={setExpenseList}
          title="Recent Transactions"
          balance={balance}
          setBalance={setBalance}
        />

        <BarChart
          data={[
            { name: "Food", value: categorySpends.food },
            { name: "Entertainment", value: categorySpends.entertainment },
            { name: "Travel", value: categorySpends.travel },
          ]}
        />
      </div>

      {/* Modals */}
      <Modal isOpen={isOpenExpense} setIsOpen={setIsOpenExpense}>
        <ExpenseForm
          setIsOpen={setIsOpenExpense}
          expenseList={expenseList}
          setExpenseList={setExpenseList}
          setBalance={setBalance}
          balance={balance}
        />
      </Modal>

      <Modal isOpen={isOpenBalance} setIsOpen={setIsOpenBalance}>
        <AddBalanceForm setIsOpen={setIsOpenBalance} setBalance={setBalance} />
      </Modal>
    </div>
  );
}
