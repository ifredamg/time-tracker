import './css/session.css';
import SessionLine from './SessionLine';
import classnames from 'classnames';

function SessionCard({ className }) {
    const mainClassNames = classnames("row session-card", className);
    return (
        <div className={mainClassNames}>
            <div className="session-card-header">
                <h2>Today</h2>
            </div>

            <div className="session-card-body">
                <SessionLine />
                <SessionLine />
                <SessionLine />
            </div>
        </div>
    );
}

export default SessionCard;