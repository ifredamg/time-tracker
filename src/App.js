import './App.css';

import { useContext, useEffect, useState } from 'react';

import CustomNavbar from './components/CustomNavbar';
import Route from './components/Route';

import TimeTrackerPage from './pages/TimeTrackerPage';
import CalendarPage from './pages/CalendarPage';
import DashboardPage from './pages/DashboardPage';
import ReportsPage from './pages/ReportsPage';
import ProjectsPage from './pages/ProjectsPage';
import ClientsPage from './pages/ClientsPage';
import TagsPage from './pages/TagsPage';

import SessionsContext from './context/sessions';

function App() {
  const { fetchSessions } = useContext(SessionsContext);

  const [currentSession, setCurrentSession] = useState(null);

  useEffect(() => {
    fetchSessions();
  }, [fetchSessions]);

  const startStopSession = () => {
    console.log(currentSession);
  };

  return (
    <div>
      <div className="container-fuild">
        <div>
          <CustomNavbar />
        </div>
      </div>

      <div className="container" style={{ marginTop: 70, marginBottom: 30 }}>
        <Route path="/">
          <TimeTrackerPage currentSession={setCurrentSession} currentSessionStartStop={startStopSession} />
        </Route>
        <Route path="/calendar">
          <CalendarPage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/reports">
          <ReportsPage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/clients">
          <ClientsPage />
        </Route>
        <Route path="/tags">
          <TagsPage />
        </Route>
      </div></div>
  );
}

export default App;
