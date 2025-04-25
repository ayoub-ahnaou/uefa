import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useMatchStore from "@/store/matchStore";
import MatchList from "@/components/MatchList";
import Pagination from "@/components/Pagination";
import Header from "@/components/Header";

export default function Home() {
  const router = useRouter();
  const { matches, currentPage, fetchMatches, setCurrentPage, loading, error } = useMatchStore();
  
  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);

  const matchesPerPage = 2;
  const totalPages = Math.ceil(matches.length / matchesPerPage);
  const startIndex = (currentPage - 1) * matchesPerPage;
  const endIndex = startIndex + matchesPerPage;
  const currentMatches = matches.slice(startIndex, endIndex);

  const handleViewDetails = (matchId) => {
    router.push(`/match/${matchId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col">
      <Header />

      <main className="container mx-auto px-4 py-10 flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white tracking-wide drop-shadow-md">
          🏆 UEFA Champions League <br className="md:hidden" />
          <span className="text-black">Quarter-Finals 2024/2025</span>
        </h1>

        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-black"></div>
          </div>
        )}

        {error && (
          <div className="bg-red-600 border border-red-400 text-white p-4 rounded-md mb-6 shadow-lg text-center">
            🚫 Une erreur est survenue lors du chargement des matchs : {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <MatchList matches={currentMatches} onViewDetails={handleViewDetails} />

            <div className="mt-10">
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          </>
        )}
      </main>

      <footer className="py-6 text-center text-gray-400 border-t border-gray-800 bg-gray-900">
        <p className="text-sm">&copy; 2025 UEFA Champions League — All rights reserved.</p>
      </footer>
    </div>
  );
}
