"use client";
import { Usercontext } from "@/components/Clients/AllClients";
import { useContext } from "react";
function Siteaboutclient({ children }) {
  const { user } = useContext(Usercontext);
  const show = !user._id ? children : null;
  return <div>{show}</div>;
}

export default Siteaboutclient;
