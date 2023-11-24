import { Suspense } from "react";
import Createtodo from "../../components/createtodo.jsx";
import Todos from "../../components/todos.jsx";
import Loading from "../loading.jsx";

function Userhomepage() {
  return (
    <div className="custom-home">
      <Createtodo />
      <Suspense fallback={<Loading />}>
        <Todos />
      </Suspense>
    </div>
  );
}

export default Userhomepage;
