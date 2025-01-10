import React, { useState } from "react";
import { candidates } from "../data";
import CandidateRating from "./CandidateRating";
import { Link } from "react-router-dom";

const ResultElection = ({ thumbnail, id, title }) => {
  const [totalVotes, setTotalVotes] = useState(521);

  //Get candidate that belong to this election iteration
  const electionCandidate = candidates.filter((candidate) => {
    return candidate.election == id;
  });
  return (
    <article className="result">
      <header className="result__header">
        <h4>{title}</h4>
        <div className="result__header-image">
          <img src={thumbnail} alt={title} />
        </div>
      </header>
      <ul className="result__list">
        {electionCandidate.map((candidate) => (
          <CandidateRating
            key={candidate.id}
            {...candidate}
            totalVotes={totalVotes}
          />
        ))}
      </ul>
      <Link to={`/elections/${id}/candidates`} className="btn primary full">
        Enter Election
      </Link>
    </article>
  );
};

export default ResultElection;