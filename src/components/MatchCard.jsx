import React from 'react';

const MatchCard = ({ match, onViewDetails }) => {
  const matchDate = new Date(match.startTimestamp * 1000).toLocaleString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const getTeamStyle = (team) => ({
    background: `linear-gradient(135deg, ${team.teamColors.primary}, ${team.teamColors.secondary})`,
    color: team.teamColors.text,
  });

  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-6 mb-6 shadow-xl hover:shadow-2xl transition duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex flex-col items-center text-center">
          <div
            className="w-20 h-20 rounded-full mb-2 shadow-inner flex items-center justify-center text-lg font-bold"
            style={getTeamStyle(match.homeTeam)}
          >
            {match.homeTeam.nameCode}
          </div>
          <h2 className="text-xl font-semibold text-white">{match.homeTeam.name}</h2>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="text-3xl font-bold bg-black text-white px-6 py-3 rounded-full shadow-lg">
            {match.homeScore.display} - {match.awayScore.display}
          </div>
          <div className="mt-2 text-sm text-gray-300">{matchDate}</div>
          <div className="text-xs text-gray-400 mt-1">{match.roundInfo?.name || ''}</div>
        </div>

        <div className="flex flex-col items-center text-center">
          <div
            className="w-20 h-20 rounded-full mb-2 shadow-inner flex items-center justify-center text-lg font-bold"
            style={getTeamStyle(match.awayTeam)}
          >
            {match.awayTeam.nameCode}
          </div>
          <h2 className="text-xl font-semibold text-white">{match.awayTeam.name}</h2>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => onViewDetails(match.id)}
          className="bg-black hover:bg-black text-white font-medium px-5 py-2 rounded-lg transition duration-200"
        >
          Voir les détails
        </button>
      </div>
    </div>
  );
};

export default MatchCard;
