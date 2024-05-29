import './App.css';
import CustomNavbar from './components/CustomNavbar';
import Route from './components/Route';
import TimeTrackerPage from './pages/TimeTrackerPage';
import CalendarPage from './pages/CalendarPage';
import DashboardPage from './pages/DashboardPage';
import ReportsPage from './pages/ReportsPage';
import ProjectsPage from './pages/ProjectsPage';
import ClientsPage from './pages/ClientsPage';
import TagsPage from './pages/TagsPage';

function App() {
  return (
    <div className="container-fuild">
      <div>
        <CustomNavbar />
      </div>

      <div style={{ marginTop: 70 }}>
        <Route path="/">
          <TimeTrackerPage />
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
      </div>
    </div>
  );
}

export default App;
