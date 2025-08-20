import navigationStyles from '../styles/navigation.module.css';

function Navigation() {
  return (
    <div className={navigationStyles.navigationContainer}>
      <nav className={navigationStyles.nav}>
      <div>
        <h2>Portfolio</h2>
      </div>
      <ul>
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Contato</li>
      </ul>
    </nav>
    </div>
  );
}

export default Navigation;