import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MatchCard from '../components/MatchCard';
import Pagination from '../components/Pagination';
import useMatchStore from '../matchStore';

const HomePage = () => {
  const navigate = useNavigate();
  const { matches, currentPage, fetchMatches, setCurrentPage, loading, error } = useMatchStore();
  
  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);

  const matchesPerPage = 2;
  const totalPages = Math.ceil(matches.length / matchesPerPage);
  const currentMatches = matches.slice(
    (currentPage - 1) * matchesPerPage, 
    currentPage * matchesPerPage
  );
  
  const handleViewDetails = (matchId) => {
    navigate(`/match/${matchId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-10 px-4">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-black drop-shadow-lg tracking-wide">
        🏆 UEFA Champions League <br className="md:hidden" />
        <span className="text-white">Quarter-Finals 2024/2025</span>
      </h1>
      
      {loading && (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-black"></div>
        </div>
      )}
      
      {error && (
        <div className="bg-red-600 text-white border border-red-400 p-4 rounded-md mb-6 text-center shadow-md">
          ⚠️ Une erreur est survenue : {error}
        </div>
      )}
      
      {!loading && !error && (
        <div className="space-y-6">
          {currentMatches.map(match => (
            <MatchCard 
              key={match.id} 
              match={match} 
              onViewDetails={handleViewDetails} 
            />
          ))}

          <div className="mt-10">
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={setCurrentPage} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
