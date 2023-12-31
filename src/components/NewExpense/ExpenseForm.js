import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmout] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   //   const [userInput, setUserInput] = useState({
  //   //     enteredTitle: "",
  //   //     enteredAmount: "",
  //   //     enteredDate: "",
  //   //   });

  //   const titleChangeHandler = (event) => {
  //     setEnteredTitle(event.target.value);
  //     // setUserInput({
  //     //   ...userInput,
  //     //   enteredTitle: event.target.value,
  //     // });
  //     // setUserInput((prevState) => {
  //     //   return { ...prevState, enteredTitle: event.target.value };
  //     // });
  //   };
  //   const amountChangeHandler = (event) => {
  //     setEnteredAmout(event.target.value);
  //     // setUserInput({
  //     //   ...userInput,
  //     //   enteredAmount: event.target.value,
  //     // });
  //     // setUserInput((prevState) => {
  //     //   return { ...prevState, enteredAmount: event.target.value };
  //     // });
  //   };
  //   const dateChangeHandler = (event) => {
  //     setEnteredDate(event.target.value);
  //     // setUserInput({
  //     //   ...userInput,
  //     //   enteredDate: event.target.value,
  //     // });
  //     // setUserInput((prevState) => {
  //     //     return { ...prevState, enteredDate: event.target.value };
  //     //   });
  //   };

  const inputChangeHandler = (identifer, value) => {
    if (identifer === "title") {
      setEnteredTitle(value);
    } else if (identifer === "date") {
      setEnteredDate(value);
    } else {
      setEnteredAmout(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmout("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
