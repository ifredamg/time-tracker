import { useState, useEffect } from 'react';
import InputText from "./Input/InputText";
import classnames from 'classnames';
import useSessionsContext from '../hooks/use-sessions-context';

function SessionCreate({ currentSession, onDescriptionChange, onStartStopClick }) {
    const [isWorking, setIsWorking] = useState(false);
    const [seconds, setSeconds] = useState(0);

    const [startDate, setStartDate] = useState(null);
    const [description, setDescription] = useState('');

    const { createSession } = useSessionsContext();

    useEffect(() => {
        let interval = null;

        if (isWorking) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isWorking && seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isWorking, seconds]);

    const handleChange = (event) => {
        setDescription(event.target.value);
        if(onDescriptionChange != null)
            onDescriptionChange(event.target.value);
    }

    const handleClick = () => {
        if (isWorking) {
            createSession(startDate, new Date(), description);
            setStartDate(null);
            setDescription('');
            setSeconds(0);
        }
        else {
            setStartDate(new Date());
        }

        setIsWorking(!isWorking);

        if(onStartStopClick != null)
            onStartStopClick();
    }

    const formatTime = (seconds) => {
        const getFormattedTime = (time) => time < 10 ? `0${time}` : time;
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${getFormattedTime(hrs)}:${getFormattedTime(mins)}:${getFormattedTime(secs)}`;
    };

    return (
        <div className="row session-create-row">
            <div className="col-12 col-md-6">
                <InputText onChange={handleChange} value={description} placeholder="What are you working on?" className="w-100" />
            </div>

            <div className="col-12 col-md-6">
                <div className="d-inline-flex float-end">
                    <span className="timer">
                        {formatTime(seconds)}
                    </span>
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