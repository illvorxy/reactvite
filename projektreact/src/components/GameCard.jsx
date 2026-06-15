// GameCard.jsx pojedyncza karta gry
import { useState } from "react";

// Mapowanie gatunków na emoji
const GENRE_ICONS = {
  Shooter: "🔫",
  MMORPG: "⚔️",
  Strategy: "♟️",
  Racing: "🏎️",
  Sports: "⚽",
  "Battle Royale": "🪖",
  Fighting: "🥊",
  "Card Game": "🃏",
  MOBA: "🗡️",
  Action: "💥",
  Fantasy: "🧙",
  "Social": "👥",
};

function GameCard({ game }) {
  // Stan dla obsługi błędu ładowania obrazka
  const [imgError, setImgError] = useState(false);

  const icon = GENRE_ICONS[game.genre] || "🎮";

  return (
    <li className="gamecard">
      {/* Kontener na obrazek */}
      <div className="gamecard-image-wrap">
        {imgError ? (
          // Fallback gdy obrazek się nie załaduje
          <div className="gamecard-image-fallback">{icon}</div>
        ) : (
          <img
            className="gamecard-image"
            src={game.thumbnail}
            alt={`Miniatura gry ${game.title}`}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}

        {/* Nakładka z platformą */}
        <span className="gamecard-platform">{game.platform}</span>
      </div>

      {/* Treść karty */}
      <div className="gamecard-body">
        {/* Gatunek z ikoną */}
        <span className="gamecard-genre">
          <span aria-hidden="true">{icon}</span> {game.genre}
        </span>

        {/* Tytuł gry */}
        <h2 className="gamecard-title" title={game.title}>
          {game.title}
        </h2>

        {/* Krótki opis (obcięty) */}
        <p className="gamecard-description">{game.short_description}</p>

        {/* Przycisk otwierający stronę gry */}
        <a
          className="gamecard-button"
          href={game.game_url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Zobacz więcej o grze ${game.title}`}
        >
          Zobacz więcej
          <svg
            className="gamecard-button-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </li>
  );
}

export default GameCard;
