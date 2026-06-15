// Header.jsx nagłówek strony z tytułem i opisem aplikacji

function Header() {
  return (
    <header className="header">
      {/* Etykieta nad tytułem */}
      <span className="header-eyebrow">Free-to-Play Games</span>

      {/* Główny tytuł z efektem gradientu */}
      <h1 className="header-title">
        Game<span className="header-title-accent">Discovery</span>
      </h1>

      {/* Krótki opis */}
      <p className="header-description">
        Odkryj setki darmowych gier online. Filtruj, przeglądaj i znajdź swój
        następny ulubiony tytuł.
      </p>

      {/* Dekoracyjna linia */}
      <div className="header-divider" />
    </header>
  );
}

export default Header;
