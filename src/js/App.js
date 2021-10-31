import React from "react";

// import ReactDOM from "react-dom";

import "../css/footer.css";
import "../css/App.css";
import Navbar from "./navbar";
import Box from "./box";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Box />
      </header>
      <Footer />
    </div>
  );
}
export default App;
