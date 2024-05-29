import './App.css';
import './components/SessionCard';
import SessionCard from './components/SessionCard';
import SessionCreate from './components/SessionCreate';

function App() {
  return (
    <div className="container">
      <h1>Time Tracker</h1>

      <SessionCreate />
      <SessionCard />
    </div>
  );
}

export default App;
