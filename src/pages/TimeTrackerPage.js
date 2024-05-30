import SessionCard from '../components/SessionCard';
import SessionCreate from '../components/SessionCreate';

function SessionPage() {
    return (
        <div>
            <h1>Time Tracker</h1>

            <SessionCreate />
            <SessionCard className="mt-3" />
        </div>
    );
}

export default SessionPage;