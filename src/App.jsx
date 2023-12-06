import { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <div
        style={{
          margin: "3%",
          backgroundColor: "white",
          boxShadow: "0 0 10px gray",
          height: "90vh",
        }}
      >
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
