import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MatchDetails from '../components/MatchDetails';
import useMatchStore from '../matchStore';

const MatchDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getMatchById, fetchMatchDetails, matchDetails, loading, error } = useMatchStore();
  
  useEffect(() => {
    if (id) {
      fetchMatchDetails(parseInt(id));
    }
  }, [id, fetchMatchDetails]);

  const match = getMatchById(parseInt(id));
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !match) {
    return (
      <div>
        <div className="bg-red-500 p-4 rounded mb-4">
          {error || "Match not found"}
        </div>
        <button 
          onClick={() => navigate('/')}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <>
      <button 
        onClick={() => navigate('/')}
        className="bg-blue-600 px-4 py-2 rounded mb-4"
      >
        &larr; Back
      </button>
      
      <MatchDetails match={match} matchDetails={matchDetails} />
    </>
  );
};

export default MatchDetailPage;