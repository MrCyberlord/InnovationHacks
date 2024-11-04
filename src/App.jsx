import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inbox from './components/Inbox';
import Starred from './components/Starred';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="sidebar">
          <ul>
            <li><Link to="/">Inbox</Link></li>
            <li><Link to="/starred">Starred</Link></li>
          </ul>
        </nav>
        <main className="content">
          <Routes>
            <Route path="/starred" element={<Starred />} />
            <Route path="/" element={<Inbox />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
