import './App.css';
import SideBar from './components/SideBar';
import Route from './components/Route';
import TimeTrackerPage from './pages/TimeTrackerPage';
import CalendarPage from './pages/CalendarPage';
import DashboardPage from './pages/DashboardPage';
import ReportsPage from './pages/ReportsPage';
import ProjectsPage from './pages/ProjectsPage';
import ClientsPage from './pages/ClientsPage';
import TagsPage from './pages/TagsPage';
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="container-fuild">
      <Row>
        <Col xs={2}>
          <SideBar />
        </Col>

        <Col xs={10}>
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
        </Col>
      </Row>
    </div>
  );
}

export default App;
