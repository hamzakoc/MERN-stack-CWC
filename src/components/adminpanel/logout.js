import React from "react";
import auth from "./auth";

export const AppLogout = props => {
  return (
    <div style={{height:"300px", paddingTop:"50px", textAlign:"center" }}>
      <p>Do you really want to log out?</p>
      <button className="btn btn-info"
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

export default AppLogout;