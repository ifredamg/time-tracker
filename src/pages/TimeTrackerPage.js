import SessionCard from '../components/SessionCard';
import SessionCreate from '../components/SessionCreate';

function SessionPage({ currentSession, currentSessionStartStop }) {
    return (
        <div>
            <h1>Time Tracker</h1>

            <SessionCreate currentSession={currentSession} onStartStopClick={currentSessionStartStop} />
            <SessionCard className="mt-3" />
        </div>
    );
}

export default SessionPage;