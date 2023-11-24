"use client";
import { useState } from "react";
import "../scss/customform.scss";
import { CreatetaskHandler } from "./frontendHandlers";
import { useRouter } from "next/navigation";

function Createtodo() {
  const [Task, setTask] = useState("");
  const [Description, setDescription] = useState("");
  const router = useRouter();
  return (
    <div className="custom-createtodo">
      <form
        onSubmit={(e) =>
          CreatetaskHandler(
            e,
            Task,
            Description,
            router,
            setTask,
            setDescription
          )
        }
      >
        <input
          type="text"
          name=""
          value={Task}
          placeholder="Task"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <textarea
          type="text"
          name=""
          value={Description}
          placeholder="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input type="submit" value="Create task" />
      </form>
    </div>
  );
}

export default Createtodo;
