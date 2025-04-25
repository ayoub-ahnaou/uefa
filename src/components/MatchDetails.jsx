import React from 'react';

const MatchCardWithDetails = ({ match, onViewDetails }) => {
  const matchDate = new Date(match.startTimestamp * 1000).toLocaleString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const { homeTeam, awayTeam, homeScore, awayScore, tournament, roundInfo, status } = match;

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300">
      
      <div className="mb-4 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-400">{tournament.name}</p>
        <h3 className="text-xl font-bold text-black">{roundInfo.name}</h3>
        <p className="text-xs text-gray-500">{match.season.name}</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center text-center">
          <div
            className="w-20 h-20 rounded-full mb-2"
            style={{ backgroundColor: homeTeam.teamColors?.primary || '#ffffff' }}
          />
          <h2 className="text-xl font-semibold">{homeTeam.name}</h2>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="text-4xl font-extrabold bg-black px-6 py-3 rounded-full shadow">
            {homeScore.display} - {awayScore.display}
          </div>
          <p className="text-sm mt-2 text-gray-300">{matchDate}</p>
          <p className="text-xs mt-1 text-gray-400">{status.description}</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div
            className="w-20 h-20 rounded-full mb-2"
            style={{ backgroundColor: awayTeam.teamColors?.primary || '#cc0000' }}
          />
          <h2 className="text-xl font-semibold">{awayTeam.name}</h2>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
        <div>
          <span className="font-medium text-gray-400">Mi-temps:</span> {homeScore.period1} - {awayScore.period1}
        </div>
        <div>
          <span className="font-medium text-gray-400">2e mi-temps:</span> {homeScore.period2} - {awayScore.period2}
        </div>
        <div>
          <span className="font-medium text-gray-400">Score global:</span> {homeScore.aggregated} - {awayScore.aggregated}
        </div>
        <div>
          <span className="font-medium text-gray-400">Pays:</span> {homeTeam.country.name} vs {awayTeam.country.name}
        </div>
      </div>

    </div>
  );
};

export default MatchCardWithDetails;
