import './css/session.css';
import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SessionLine() {
    const [isWorking, setIsWorking] = useState(false);

    const handleClick = () => {
        setIsWorking(!isWorking);
    }

    return (
        <div className="row session-card-body-line">
            <div className="col-12 col-md-6">
            </div>

            <div className="col-12 col-md-6">
                <div className="d-inline-flex float-end">
                    <span className="timer">00:00:00</span>
                    <button onClick={handleClick} className="btn btn-start-stop">
                        {!isWorking ? <FontAwesomeIcon icon="fa-solid fa-play" /> : <FontAwesomeIcon icon="fa-solid fa-stop" />}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SessionLine;