import React from "react";
import { Link } from "react-router-dom";

const MatchCard = ({ match }) => {
  return (
    <Link to={`/match/${match.id}`}>
      <div className="bg-gray-800 hover:bg-gray-700 transition p-4 rounded-xl shadow flex justify-between items-center mb-3">
        <div className="flex gap-4">
          <span className="font-bold">{match.homeTeam.name}</span>
          <span>{match.homeScore.current}</span>
          <span className="text-gray-400">vs</span>
          <span>{match.awayScore.current}</span>
          <span className="font-bold">{match.awayTeam.name}</span>
        </div>
        <span className="text-sm text-gray-400">
          {match.status.description}
        </span>
      </div>
    </Link>
  );
};

export default MatchCard;
