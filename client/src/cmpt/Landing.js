import React from "react";

const Landing = () => {

    return (
        <div className="landing">
          <form action="/login">
              <button type="submit" className="landing btn" >Log In</button>
          </form>
          <form action="/sign">
              <button type="submit" className="landing btn" >Sign In</button>
          </form>
        </div>
    );
};

export default Landing;
