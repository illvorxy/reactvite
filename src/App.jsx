import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import GameList from "./components/GameList";
import "./App.css";

function App() {
  // Stan: lista wszystkich gier pobrana z API
  const [games, setGames] = useState([]);
  // Stan: tekst wpisany w wyszukiwarce
  const [searchQuery, setSearchQuery] = useState("");
  // Stan: ładowanie i błąd
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pobieramy gry z API tylko raz przy pierwszym renderowaniu
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("https://www.freetogame.com/api/games");
        if (!response.ok) throw new Error("Błąd sieci");
        const data = await response.json();
        setGames(data);
      } catch (err) {
        setError("Nie udało się pobrać gier. Spróbuj ponownie później.");
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  // Filtrowanie gier po tytule (case-insensitive) w czasie rzeczywistym
  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      {/* Tło z cząsteczkami */}
      <div className="bg-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="app-content">
        <Header />

        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          resultCount={filteredGames.length}
        />

        {/* Wyświetl odpowiedni widok zależnie od stanu */}
        {loading && (
          <div className="status-container">
            <div className="loader" />
            <p className="status-text">Ładowanie gier...</p>
          </div>
        )}

        {error && (
          <div className="status-container">
            <p className="status-text error">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <GameList games={filteredGames} searchQuery={searchQuery} />
        )}
      </div>
    </div>
  );
}

export default App;
