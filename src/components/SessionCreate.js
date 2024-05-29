import { useState } from 'react';
import InputText from "./Input/InputText";
import classnames from 'classnames';

function SessionCreate() {
    const [isWorking, setIsWorking] = useState(false);

    const handleClick = () => {
        setIsWorking(!isWorking);
    }

    return (
        <div className="row session-create-row">
            <div className="col-12 col-md-6">
                <InputText placeholder="What are you working on?" className="w-100" />
            </div>

            <div className="col-12 col-md-6">
                <div className="d-inline-flex float-end">
                    <span className="timer">00:00:00</span>
                    <button onClick={handleClick} className={classnames('btn btn-start-stop', {
                        "btn-primary": !isWorking,
                        "btn-danger": isWorking
                    })}>
                        {!isWorking ? "START" : "STOP"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SessionCreate;