import './css/session.css';
import SessionLine from './SessionLine';
import classnames from 'classnames';
import useSessionsContext from '../hooks/use-sessions-context';

function SessionCard({ className }) {
    const mainClassNames = classnames("row session-card", className);

    const { sessions } = useSessionsContext();

    console.log(sessions);
    
    const renderedSessionLines = sessions.map((line) => {
        return (
            <SessionLine lineData={line} />
        );
    });

    return (
        <div className={mainClassNames}>
            <div className="session-card-header">
                <h2>Today</h2>
            </div>

            <div className="session-card-body">
                {renderedSessionLines}
            </div>
        </div>
    );
}

export default SessionCard;