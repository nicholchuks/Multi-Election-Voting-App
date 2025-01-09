import React from "react";
import { candidates as dummyCandidates } from "../data";
import { useParams } from "react-router-dom";
import Candidate from "../components/Candidate";

const Candidates = () => {
  const { id } = useParams();

  const candidates = dummyCandidates.filter(
    (candidate) => candidate.election === id
  );

  return (
    <section className="candidates">
      <header className="candidates__header">
        <h1>Vote your candidate</h1>
        <p>
          These are the candidates for the selected election. Please vote once
          and wisely, because you won't be allowed to vote in this election
          again
        </p>
      </header>
      <div className="container candidates__container">
        {candidates.map((candidate) => (
          <Candidate key={candidate.id} {...candidate} />
        ))}
      </div>
    </section>
  );
};

export default Candidates;
