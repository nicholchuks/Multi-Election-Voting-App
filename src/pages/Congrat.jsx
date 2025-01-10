import React from "react";
import { Link } from "react-router-dom";

const Congrat = () => {
  return (
    <section className="congrats">
      <div className="container congrats__containe">
        <h2>Thanks for you vote</h2>
        <p>
          Your vote is now added to your candidate's vote count. You will be
          redirected shortly to see the new result.
        </p>
        <Link to="/results" className="btn sm primary">
          See Results
        </Link>
      </div>
    </section>
  );
};

export default Congrat;
