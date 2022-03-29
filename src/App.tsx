import React from "react";
import MintForm from "./components/mint-form/MintForm";
import Wallet from "./components/header/Wallet";

import "antd/dist/antd.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Wallet />
      <MintForm />
    </div>
  );
}

export default App;
