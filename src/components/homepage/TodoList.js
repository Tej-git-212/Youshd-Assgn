import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import List from "./List";

function TodoList({ containerTitle, items, addItem, onDrop, status }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const addBtnHandler = () => {
    setIsFormOpen((pre) => {
      return !pre;
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.title.value);
    const enteredTitle = e.target.title.value;
    const enteredDesc = e.target.desc.value;

    addItem({
      id: new Date().toISOString(),
      title: enteredTitle,
      desc: enteredDesc,
      status: containerTitle,
    });
    setIsFormOpen(false);
  };

  const calculateItems = (items, status) => {
    let totalItems = 0;
    items.forEach((i) => {
      if (i.status === status) totalItems++;
    });
    return totalItems;
  };
  const totalItems = calculateItems(items, status);

  return (
    <div className="todo_container">
      <div className="container_header">
        <p className="container_title">{containerTitle}</p>
        <p className="count">{totalItems}</p>
      </div>
      <button className="add_btn" onClick={addBtnHandler}>
        +
      </button>
      {isFormOpen && (
        <Card>
          <form onSubmit={submitHandler} className="input_form">
            <input
              className="input_title"
              type="text"
              name="title"
              placeholder="Give your task a title"
            />
            <input
              className="input_desc"
              type="text"
              name="desc"
              placeholder="Description"
            />
            <button hidden type="submit">
              dummy
            </button>
          </form>
        </Card>
      )}

      <List items={items} onDrop={onDrop} status={status} addItem={addItem} />
    </div>
  );
}

export default TodoList;
