import React from "react";
import auth from "./auth";

export const AppLayout = props => {
  return (
    <div style={{height:"300px", paddingTop:"50px", textAlign:"center" }}>
      <p>Do you rellay want to log out?</p>
      <button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/admin");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default AppLayout;