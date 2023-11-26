import { useState } from "react";

export default function ItemList(props) {
  const [editValue, setEditValue] = useState("");
  const button = (
    <button onClick={() => props.deleteItem(props.index)}><i className="fa-solid fa-trash"/></button>
  );
  const buttonEdit = (
    <span>
      <button onClick={() => props.editItem(props.index, editValue)}>
        <i className="fa-solid fa-pen-to-square"/>
      </button>
      <input
        className="edit-input"
        type="text"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
      />
    </span>
  );
  return (
    <li>
      <div className="li-container">
        {props.name}{" "}
        <span style={{ float: "right" }}>
          {" "}
          {button} {buttonEdit}{" "}
        </span>
      </div>
    </li>
  );
}
