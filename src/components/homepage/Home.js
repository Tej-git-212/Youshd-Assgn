import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <main className="home">
      <Sidebar />
      <Main />
    </main>
  );
}

export default Home;
