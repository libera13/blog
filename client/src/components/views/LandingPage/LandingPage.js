import React from "react";
import { FaBookReader } from "react-icons/fa";

function LandingPage() {
  return (
    <>
      <div className="app">
        <FaBookReader style={{ fontSize: "4rem" }} />
        <br />
        <span style={{ fontSize: "2rem" }}>Let's Start Blogging!</span>
      </div>
    </>
  );
}

export default LandingPage;
