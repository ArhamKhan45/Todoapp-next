"use client";

import { useState } from "react";
import "../../scss/customform.scss";
import { RegisterHandler } from "@/components/frontendHandlers";
import { redirect } from "next/navigation";

function Registerpage() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [goto, setgoto] = useState(true);

  if (!goto) redirect("login");
  return (
    <div className="custom-register">
      <form
        onSubmit={(e) => RegisterHandler(e, name, email, password, setgoto)}
      >
        <input
          type="text"
          name=""
          placeholder="Enter Name"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <input
          type="email"
          name=""
          placeholder="Enter Email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          type="password"
          name=""
          placeholder="Enter Password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Registerpage;
