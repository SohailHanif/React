import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navigation from './components/Navigation';

import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import ClickPage from './pages/Click';
import PeoplePage from './pages/People';
import Error from './pages/Error';
import Home from './pages/Home';
import WikipediaPage from './pages/Wikipedia';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navigation/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/click" element={<ClickPage />} />
          <Route path="/wikipedia" element={<WikipediaPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
