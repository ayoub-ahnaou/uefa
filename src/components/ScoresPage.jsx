import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ScoresPage() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("https://api.sofascore.com/api/v1/sport/football/scheduled-events/2025-04-15")
      .then(res => res.json())
      .then(data => {
        const filteredMatches = data.events.filter(
          event =>
            event.tournament?.name === "UEFA Champions League, Knockout Phase" &&
            event.status?.type === "finished"
        );
        setMatches(filteredMatches);
      })
      .catch(err => console.error("Error fetching matches:", err));
  }, []);

  return (
    <div className="h-full bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🏆 Champions League Results (15 April 2025)</h1>
      <div className="grid gap-4">
        {matches.map(match => (
          <Link
            to={`/match/${match.id}`}
            key={match.id}
            className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition"
          >
            <div className="flex justify-between items-center">
              <div>{match.homeTeam.name}</div>
              <div className="font-semibold text-lg">
                {match.homeScore.current} - {match.awayScore.current}
              </div>
              <div>{match.awayTeam.name}</div>
            </div>
            <div className="text-sm text-gray-400">{match.roundInfo?.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ScoresPage;
