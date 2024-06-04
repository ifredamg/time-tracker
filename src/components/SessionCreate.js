import { useState } from 'react';
import InputText from "./Input/InputText";
import classnames from 'classnames';
import useSessionsContext from '../hooks/use-sessions-context';

function SessionCreate() {
    const [description, setDescription] = useState('');
    const [isWorking, setIsWorking] = useState(false);
    const { createSession } = useSessionsContext();

    const handleChange = (event) => {
        setDescription(event.target.value);
    }

    const handleClick = () => {
        if(isWorking) {
            createSession(description);
            setDescription('');
        }
        
        setIsWorking(!isWorking);
    }

    return (
        <div className="row session-create-row">
            <div className="col-12 col-md-6">
                <InputText onChange={handleChange} placeholder="What are you working on?" className="w-100" />
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