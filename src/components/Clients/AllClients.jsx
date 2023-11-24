"use client";

import { Logouthandler, Savelogin } from "@/components/frontendHandlers";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Suspense,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Flip, ToastContainer, toast } from "react-toastify";

// bootstrap connect

export function BootstrapConnect() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  });
  return null;
}

export const Usercontext = createContext({ user: {} });

export function ContextProvider({ children }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    Savelogin(setUser);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Usercontext.Provider value={{ user, setUser }}>
      {children}

      <ToastContainer
        position="top-center"
        autoClose={2000}
        transition={Flip}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Usercontext.Provider>
  );
}

export function Loginbtn({ Login }) {
  return (
    <Link className="" aria-current="page" href={"/" + Login.toLowerCase()}>
      {Login}
    </Link>
  );
}
export function Logoutbtn({ Logout }) {
  const { user, setUser } = useContext(Usercontext);

  return (
    <button
      className="bg-transparent"
      onClick={(e) => Logouthandler(e, setUser)}
    >
      {Logout}
    </button>
  );
}

export function Loginlogoutbtn() {
  const { user } = useContext(Usercontext);

  // console.log(user._id);
  return (
    <>
      {user._id ? (
        <Logoutbtn Logout={"Logout"} />
      ) : (
        <Loginbtn Login={"Login"} />
      )}
    </>
  );
}
