"use client";
import Link from "next/link";
import "../../scss/customform.scss";
import { loginHandler } from "@/components/frontendHandlers";
import { useContext, useState } from "react";
import { Usercontext } from "@/components/Clients/AllClients";
import { redirect, useRouter } from "next/navigation";

function Loginpage() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { user, setUser } = useContext(Usercontext);
  const router = useRouter();
  // if (user._id) return redirect("/");
  if (user._id) {
    router.push("/");
    router.refresh();
  }
  return (
    <div className="custom-login">
      <form onSubmit={(e) => loginHandler(e, email, password, setUser)}>
        <input
          type="email"
          name=""
          value={email}
          placeholder="Enter email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          type="password"
          name=""
          value={password}
          placeholder="Enter Password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />

        <input type="submit" value="Login" />
        <div>
          <p>Or</p>
          <Link href={"/register"} className="fw-bold text-decoration-none">
            New User
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Loginpage;
