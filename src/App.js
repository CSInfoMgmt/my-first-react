// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const dataVal = [
    { id: "i1", title: "Ipad", amount: 850, date: new Date(2023, 0, 1) },
    { id: "i2", title: "Ipad-Air", amount: 860, date: new Date(2022, 11, 10) },
    { id: "i3", title: "Ipad-Pro", amount: 870, date: new Date(2022, 11, 11) },
    {
      id: "i4",
      title: "Ipad-Pro 12.9",
      amount: 880,
      date: new Date(2022, 11, 12),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses dataVal={dataVal} index={0} />
      <Expenses dataVal={dataVal} index={1} />
      <Expenses dataVal={dataVal} index={2} />
      <Expenses dataVal={dataVal} index={3} />
    </div>
  );
}

export default App;
