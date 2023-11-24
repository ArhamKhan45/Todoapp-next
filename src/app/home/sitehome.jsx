import React from "react";
import "../../scss/Sitehomepage.scss";
function Sitehomepage() {
  return (
    <div className="w-75 mx-auto custom-Sitehomepage">
      <p>
        Certainly! Crafting a compelling homepage for a to-do app involves
        highlighting key features, benefits, and creating a call-to-action to
        encourage users to sign up or download the app. Here&apos;s a sample
        content for a to-do app homepage: Welcome to
        <span className="text-danger fw-bold"> ARM TODO APP </span> Elevate Your
        Productivity, Simplify Your Life Are you ready to conquer your day with
        ease? [Your Todo App Name] is here to transform the way you manage
        tasks, making productivity a seamless part of your routine.
      </p>
      <div>
        <h5>
          Why [ <span className="text-danger fw-bold">ARM TODO APP</span> ]?
        </h5>
        <div className="mt-3">
          <h5> 1. Intuitive Task Management</h5>
          <p>
            Stay organized effortlessly with our user-friendly interface. Drag
            and drop tasks, set due dates, and create custom lists in a snap.
            Your to-dos, your way.
          </p>
          <h5>2. Seamless Cross-Platform Experience</h5>
          <p>
            Access your tasks from anywhere, anytime. Whether you&apos;re on
            your computer, tablet, or smartphone, [
            <span className="text-danger fw-bold"> ARM TODO APP </span> ] syncs
            in real-time to keep you on track.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sitehomepage;
