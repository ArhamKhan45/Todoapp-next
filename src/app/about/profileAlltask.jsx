import React, { Suspense } from "react";
import Todos from "../../components/todos.jsx";
import Loading from "../loading.jsx";
function profileAlltask() {
  return (
    <div>
      <h5 className="profiletask ">All Task</h5>
      <Suspense fallback={<Loading />}>
        <Todos />
      </Suspense>
    </div>
  );
}

export default profileAlltask;
