// GameList.jsx kontener siatki kart z grami

import GameCard from "./GameCard";

function GameList({ games, searchQuery }) {
  // Gdy brak wyników dla wyszukiwania
  if (games.length === 0) {
    return (
      <div className="gamelist-empty">
        <span className="gamelist-empty-icon">🎮</span>
        <h2 className="gamelist-empty-title">Brak wyników</h2>
        <p className="gamelist-empty-text">
          Żadna gra nie pasuje do frazy „{searchQuery}".
          <br />
          Spróbuj innego słowa kluczowego.
        </p>
      </div>
    );
  }

  return (
    // CSS Grid siatka kart
    <ul className="gamelist-grid" aria-label="Lista gier">
      {games.map((game) => (
        // Renderujemy kartę dla każdej gry z listy
        <GameCard key={game.id} game={game} />
      ))}
    </ul>
  );
}

export default GameList;
