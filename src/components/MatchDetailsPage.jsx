import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function MatchDetail() {
  const { id } = useParams();
  const [match, setMatch] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.sofascore.com/api/v1/sport/football/scheduled-events/2025-04-15"
    )
      .then((res) => res.json())
      .then((data) => {
        const foundMatch = data.events.find(
          (event) => event.id.toString() === id
        );
        setMatch(foundMatch);
      })
      .catch((err) => console.error("Error fetching match detail:", err));
  }, [id]);

  if (!match) return <div className="p-6 text-white">Loading...</div>;

  return (
    <div className="bg-gray-900 text-white p-6">
      <Link to="/" className="text-blue-400 underline mb-4 block">
        ← Back to List
      </Link>
      <h1 className="text-2xl font-bold mb-4">{match.tournament.name}</h1>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="text-lg mb-2">{match.roundInfo?.name}</div>
        <div className="flex justify-between items-center text-xl font-semibold">
          <span>{match.homeTeam.name}</span>
          <span>
            {match.homeScore.current} - {match.awayScore.current}
          </span>
          <span>{match.awayTeam.name}</span>
        </div>

        <div className="mt-4 text-sm text-gray-400">
          <p>Status: {match.status.description}</p>
          <p>
            Aggregated: {match.homeScore.aggregated ?? 0} -{" "}
            {match.awayScore.aggregated ?? 0}
          </p>
          <p>Winner code: {match.winnerCode}</p>
        </div>
      </div>
    </div>
  );
}

export default MatchDetail;
