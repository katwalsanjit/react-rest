import React, { useState } from "react";

function Login() {
  const [btnText, setBtnText] = useState("Login");
  return (
    <div>
      <button
        className="btn-login"
        onClick={() => {
          btnText == "Login" ? setBtnText("Logout") : setBtnText("Login");
        }}
      >
        {btnText}
      </button>
    </div>
  );
}

export default Login;
