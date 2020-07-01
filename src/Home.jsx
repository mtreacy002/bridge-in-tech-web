import React from "react";

export default function Home({user}) {
    return (
        <div className="container-fluid" id="home">
          <div className="top">
          <p>Logged in status: {user.toString()}</p>
            <h1>
              Welcome to Bridge In Tech Landing page
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

