import "./App.css";
import ExpenseTracker from "./components/ExpenseTracker";
import RecentTransaction from "./components/Transaction";
import TopExpenses from "./components/TopExpenses";
function App() {
  return (
    <div className="App">
      <ExpenseTracker />
      <div style={{ display: "flex", gap: "24px" }}>
        <RecentTransaction />
        <TopExpenses />
      </div>
    </div>
  );
}

export default App;
