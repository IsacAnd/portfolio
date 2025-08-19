import './App.css'
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {

  return (
    <div className='app-container'>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Main />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
