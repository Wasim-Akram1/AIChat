import React from "react";
import Chat from "./components/Chat";
import NavBar from "./pages/NavBar";


function App() {
  return (
    <div className="app">
      <NavBar/>
      <Chat />
    </div>
  );
}

export default App;
