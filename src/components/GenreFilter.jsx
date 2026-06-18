// GenreFilter.jsx – dropdown do filtrowania gier po gatunku

function GenreFilter({ genres, selectedGenre, onGenreChange }) {
  return (
    <select
      className="genrefilter-select"
      value={selectedGenre}
      onChange={(e) => onGenreChange(e.target.value)}
      aria-label="Filtruj po gatunku"
    >
      <option value="">Wszystkie gatunki</option>
      {genres.map((genre) => (
        <option key={genre} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
}

export default GenreFilter;
