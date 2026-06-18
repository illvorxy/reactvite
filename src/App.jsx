import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GenreFilter";
import GameList from "./components/GameList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Stan: lista wszystkich gier pobrana z API
  const [games, setGames] = useState([]);
  // Stan: tekst wpisany w wyszukiwarce
  const [searchQuery, setSearchQuery] = useState("");
  // Stan: wybrany gatunek do filtrowania
  const [selectedGenre, setSelectedGenre] = useState("");
  // Stan: ładowanie i błąd
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pobieramy gry z API tylko raz – przy pierwszym renderowaniu
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

  // Unikalna lista gatunków do filtra (wyliczana z pobranych danych)
  const genres = [...new Set(games.map((game) => game.genre))].sort();

  // Filtrowanie gier po tytule ORAZ wybranym gatunku, w czasie rzeczywistym
  const filteredGames = games.filter((game) => {
    const matchesTitle = game.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre ? game.genre === selectedGenre : true;
    return matchesTitle && matchesGenre;
  });

  return (
    <div className="app">
      <div className="app-content">
        <Header />

        <div className="filters-row">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            resultCount={filteredGames.length}
          />
          <GenreFilter
            genres={genres}
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
          />
        </div>

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

        <Footer />
      </div>
    </div>
  );
}

export default App;
