import React from "react";
import "../scss/todocontainer.scss";
import Todoupdate from "./Clients/todoupdate";
function Todocontainer({ id, title, description, iscompleted }) {
  return (
    <div className="custom-todo-container">
      <h3>{title}</h3>
      <p>{description}</p>

      <Todoupdate id={id} title={title} iscompleted={iscompleted} />
    </div>
  );
}

export default Todocontainer;
