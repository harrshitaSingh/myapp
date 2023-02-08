import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "../components/To-do-lis/ToDoList.css";

const ListItems = (props) => {
  const [line, setLine] = useState(false);
  const cutIt = () => {
    setLine(true);
  };
  return (
    <div className="list_style">
      <span onClick={cutIt}>
        <DeleteIcon className="deleteIcon" />
      </span>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
};

export default ListItems;
