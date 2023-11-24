"use client";
import Link from "next/link";
import "../scss/Navbarshow.scss";
import { Loginlogoutbtn } from "./Clients/AllClients";
function Navbarshow({ Home, About, Login }) {
  return (
    <nav className="navbar navbar-expand-sm custom-nav">
      <div className="container-fluid ">
        <Link className="navbar-brand " href="/">
          ARM TODO APP
        </Link>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ms-auto    ">
            <Link
              className="  "
              aria-current="page"
              href={"/" + Home.toLowerCase()}
            >
              {Home}
            </Link>
            <Link
              className="  "
              aria-current="page"
              href={"/" + About.toLowerCase()}
            >
              {About}
            </Link>
            <Loginlogoutbtn />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbarshow;
