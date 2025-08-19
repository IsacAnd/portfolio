import navigationStyles from '../styles/navigation.module.css';

function Navigation() {
  return (
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
  );
}

export default Navigation;