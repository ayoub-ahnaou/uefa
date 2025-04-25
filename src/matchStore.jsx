import { create } from "zustand";
import axios from "axios";

const useMatchStore = create((set, get) => ({
  matches: [],
  matchDetails: null,
  currentPage: 1,
  loading: false,
  error: null,
  
  fetchMatches: async () => {
    set({ loading: true, error: null });
    
    try {
      const response = await axios.get("https://api.sofascore.com/api/v1/sport/football/scheduled-events/2025-04-16");
      
      const championsLeagueMatches = response.data.events.filter(
        event => event.tournament.name.includes('UEFA Champions League, Knockout Phase') && 
                event.roundInfo?.name === 'Quarterfinals'
      );
      console.log(championsLeagueMatches);
      
      set({ 
        matches: championsLeagueMatches,
        loading: false 
      });
    } catch (error) {
      console.error('Error fetching matches:', error);
      set({ 
        error: 'Failed to fetch matches. Please try again later.',
        loading: false 
      });
    }
  },
  
  fetchMatchDetails: async (matchId) => {
    set({ loading: true, error: null });
    
    try {
      // Simulate API call for match details
      const match = get().matches.find(m => m.id === matchId);
      
      if (!match) {
        throw new Error('Match not found');
      }
      
      // Simulate man of the match data
      const manOfTheMatch = {
        id: match.id * 10,
        name: match.homeScore.display > match.awayScore.display 
          ? `Star Player (${match.homeTeam.name})`
          : `Star Player (${match.awayTeam.name})`,
        team: match.homeScore.display > match.awayScore.display 
          ? match.homeTeam.name
          : match.awayTeam.name
      };
      
      // Random referee
      const referees = ['Michael Oliver', 'Daniele Orsato', 'Clément Turpin'];
      
      const matchDetails = {
        id: match.id,
        manOfTheMatch,
        referee: {
          name: referees[Math.floor(Math.random() * referees.length)]
        }
      };
      
      set({ matchDetails, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  
  getMatchById: (id) => get().matches.find(match => match.id === id),
  
  setCurrentPage: (page) => set({ currentPage: page }),
}));

export default useMatchStore;