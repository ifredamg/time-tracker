import './css/session.css';
import Session from './Session';
import classnames from 'classnames';

function SessionCard({ className }) {
    const mainClassNames = classnames("row session-card", className);
    return (
        <div className={mainClassNames}>
            <div className="session-card-header">
                <h2>Today</h2>
            </div>

            <div className="session-card-body">
                <Session />
                <Session />
                <Session />
            </div>
        </div>
    );
}

export default SessionCard;