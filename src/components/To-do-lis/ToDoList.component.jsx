import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ListItems from "../ListItems";
import "../To-do-lis/ToDoList.css"

const ToDoList = () => {
  const [items, setItems] = useState("");
  const [newItems, setNewItems] = useState([]);

  const itemEvent = (event) => {
    setItems(event.target.value);
  };

  const listItems = () => {
    setNewItems((prevItems) => {
      return [...prevItems, items];
    });
    setItems("");
  };

  return (
    <>
      <div className="main_container">
        <div className="center_container">
          <br />
          <h1>TO DO LIST</h1>
          <br />
          <input
            type="text"
            value={items}
            placeholder="Add items here"
            onChange={itemEvent}
          />
          <Button
            className="new_button"
            variant="contained"
            onClick={listItems}
          >
            <AddIcon />
          </Button>

          <ol>
            {newItems.map((val, index) => {
              return <ListItems key={index} text={val} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
