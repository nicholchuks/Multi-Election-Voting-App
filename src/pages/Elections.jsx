import React, { useState } from "react";
import { elections as dummyElections } from "../data";
import Election from "../components/Election";

const Elections = () => {
  const [elections, setElections] = useState(dummyElections);
  return (
    <section className="elections">
      <div className="container elections__container">
        <header className="elections__header">
          <button className="btn primary">Create New Election</button>
        </header>
        <menu className="elections__menu">
          {elections.map((election) => (
            <Election key={election.id} {...election} />
          ))}
        </menu>
      </div>
    </section>
  );
};

export default Elections;
