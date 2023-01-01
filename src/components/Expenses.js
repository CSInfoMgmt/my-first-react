import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.dataVal[props.index].title}
        amount={props.dataVal[props.index].amount}
        date={props.dataVal[props.index].date}
      />
    </div>
  );
}

export default Expenses;
