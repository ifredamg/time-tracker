import SessionCard from '../components/SessionCard';
import SessionCreate from '../components/SessionCreate';

function SessionPage() {
    return (
        <div className="container">
            <h1>Time Tracker</h1>

            <SessionCreate />
            <SessionCard />
        </div>
    );
}

export default SessionPage;