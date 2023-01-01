import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  //   expenseDate.toLocaleString("en-US");
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <div className="expense-item__price">SGD {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
