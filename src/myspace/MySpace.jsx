import React from "react";

export default function MySpace({user}) {
    return (
        <div className="container-fluid" id="myspace">
          <p>Logged in status: {user.toString()}</p>
          <div className="top">
            <h1>
              This will be Private page for the Member's Portfolio
            </h1>
          </div>
          <div className="middle">
            <h2>The site is currently under construction...</h2>
          </div>
          <div className="bottom">
            <h3>
                Thank you for your patience and understanding.
            </h3>
          </div>
        </div>
    )
}


