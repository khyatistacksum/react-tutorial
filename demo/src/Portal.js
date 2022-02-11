import React from "react";
import ReactDOM from "react-dom";

function Portal() {
  return ReactDOM.createPortal(
    <h1>This is from Portal file</h1>,
    document.getElementById("another_root")
  );
}

export default Portal;
