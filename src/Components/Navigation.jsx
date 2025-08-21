import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext.jsx";
import navStyles from "../styles/navigation.module.css";

function Navigation() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={navStyles.navigationContainer}>
      <nav>
        <h2>Meu Portfólio</h2>
        <ul>
          <li>Home</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
        <button className={navStyles.themeToggleBtn} onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </nav>
    </div>
  );
}

export default Navigation;
