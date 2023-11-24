"use client";
import { useRouter } from "next/navigation";
import "../../scss/todocheck.scss";
import "../../scss/Todoupdate.scss";
import { deleteTaskHandler, updatetaskHandler } from "../frontendHandlers";
import { useState } from "react";

function Todoupdate({ id, title, iscompleted }) {
  const [done, setdone] = useState(iscompleted);
  const router = useRouter();
  return (
    <div className="custom-todoupdate">
      <div className="checkbox-wrapper-11 ">
        <input
          id={id}
          type="checkbox"
          name=""
          value=""
          checked={done}
          onChange={() => updatetaskHandler(id, setdone)}
          className="border"
          style={{
            width: "18px",
            height: "15px",
          }}
        />
        {/* <label htmlFor={id}>To-do task</label> */}
        <label htmlFor={id}>{title}</label>
      </div>
      <button
        className="btn btn-danger"
        onClick={() => deleteTaskHandler(id, router)}
      >
        Delete
      </button>
    </div>
  );
}

export default Todoupdate;
