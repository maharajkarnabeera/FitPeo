import React from "react";
import "./App.css";
import HorizontalNav from "./components/HorizontalNav/HorizonalNav";
import VerticalNav from "./components/VerticalNav/VerticalNav";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <header className="sticky z-50 top-0 overflow-hidden">
        <HorizontalNav />
      </header>
      <main className="lg:flex bg-[#141316]">
        <VerticalNav />
        <Dashboard />
      </main>
    </>
  );
}

export default App;
