"use client";
import { profileUpdateHandler } from "@/components/frontendHandlers";
import "../../scss/profileEdit.scss";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function ProfileEdit() {
  const [name, setName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const router = useRouter();
  return (
    <div className="text-end mt-3 ">
      {/* < Button trigger modal  */}
      {/* {name} */}

      <button
        type="button"
        className=" editprofileopen "
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Edit Profile
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-danger"
                id="staticBackdropLabel"
              >
                Edit Profile Dialog Box
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body mx-auto text-danger custom-profile-edit">
              <form
                onSubmit={(e) =>
                  profileUpdateHandler(
                    e,
                    name,
                    currentPassword,
                    newPassword,
                    confirmNewPassword,
                    setName,
                    setCurrentPassword,
                    setNewPassword,
                    setConfirmNewPassword,
                    router
                  )
                }
              >
                <input
                  type="text"
                  name=""
                  id=""
                  value={name}
                  placeholder={"Enter Name"}
                  className=""
                  onChange={(e) => setName(e.target.value)}
                />

                <br />
                <input
                  type="password"
                  name=""
                  value={currentPassword}
                  placeholder={"Current Password"}
                  className=""
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <br />

                <input
                  type="password"
                  value={newPassword}
                  name=""
                  placeholder={"New Password"}
                  className=""
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <br />

                <input
                  type="password"
                  name=""
                  value={confirmNewPassword}
                  placeholder={"Confirm New Password"}
                  className=""
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
                <br />
                <button
                  type="button"
                  className="btn btn-secondary btn-lg me-3"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <input
                  type="submit"
                  className="btn btn-warning text-light btn-lg"
                  value="Let's change"
                  data-bs-dismiss="modal"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;
