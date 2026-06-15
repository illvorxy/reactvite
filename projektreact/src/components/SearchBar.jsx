// SearchBar.jsx formularz do filtrowania gier w czasie rzeczywistym

function SearchBar({ searchQuery, onSearchChange, resultCount }) {
  return (
    <div className="searchbar-wrapper">
      <div className="searchbar-container">
        {/* Ikona lupy */}
        <span className="searchbar-icon">🔍</span>

        {/* Pole wyszukiwania onChange aktualizuje stan w App */}
        <input
          className="searchbar-input"
          type="text"
          placeholder="Szukaj gry po tytule..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Wyszukaj grę"
        />

        {/* Przycisk czyszczenia widoczny tylko gdy coś wpisano */}
        {searchQuery && (
          <button
            className="searchbar-clear"
            onClick={() => onSearchChange("")}
            aria-label="Wyczyść wyszukiwanie"
          >
            ✕
          </button>
        )}
      </div>

      {/* Licznik wyników wyszukiwania */}
      <p className="searchbar-results">
        {searchQuery
          ? `Znaleziono ${resultCount} gier dla „${searchQuery}"`
          : `${resultCount} gier dostępnych`}
      </p>
    </div>
  );
}

export default SearchBar;
