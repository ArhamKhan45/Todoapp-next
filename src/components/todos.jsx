import React from "react";
import Todocontainer from "./todocontainer.jsx";
import "../scss/todos.scss";
import { cookies } from "next/headers";
import { toast } from "react-toastify";

const Tododata = async (token) => {
  try {
    const res = await fetch(`${process.env.MYURL}/api/user/mytasks`, {
      cache: "no-cache",
      headers: {
        cookie: `token=${token}`,
      },
    });
    const data = await res.json();
    // console.log(data);
    if (!data.success) {
      return [];
    }

    return data.task;
  } catch (error) {
    toast.error(error);
  }
};

const todos = async () => {
  let tokenmaker = cookies().getAll();

  var token;
  if (tokenmaker.length > 0) {
    token = tokenmaker[0].value;
  } else {
    token = [];
  }

  const task = await Tododata(token);

  const Alltasks = task.map((item) => {
    return (
      <Todocontainer
        id={item._id}
        key={item._id}
        title={item.title}
        description={item.description}
        iscompleted={item.iscompleted}
      />
    );
  });

  return <div className="custom-todos">{Alltasks}</div>;
};

export default todos;
