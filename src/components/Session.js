import './css/session.css';

function Session() {
    return (
        <div className="row session-line">
            <div className="col-12 col-md-10">
                <span><small>Last session: 29/05/2024</small></span>
                <p>Project</p>
            </div>

            <div className="col-12 col-md-2">
                <p>Time</p>
            </div>
        </div>
    );
}

export default Session;