import React, { useState } from "react";

import "./styles.css";

const Wallet = () => {
  const [account, setAccount] = useState(null);

  const clickHandler = () => {
    if (window?.ethereum) {
      window?.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => {
          console.log(res);
          setAccount(res[0]);
        });
    }
  };

  return (
    <header>
      {account ? (
        <p className="connection">You are connected to: {account}</p>
      ) : (
        "Please Connect account"
      )}

      <button onClick={clickHandler}>Connect Account</button>
    </header>
  );
};

export default Wallet;
