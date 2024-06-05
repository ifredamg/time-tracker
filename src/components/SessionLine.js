import './css/session.css';
import { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import InputText from './Input/InputText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SessionLine({ lineData }) {
    const [isWorking, setIsWorking] = useState(false);
    const [description, setDescription] = useState(lineData.description);
    const [startDate, setStartDate] = useState(lineData.start_date);
    const [endDate, setEndDate] = useState(lineData.start_date);
    const [difference, setDifference] = useState(0);

    useEffect(() => {
        calculateDifference();
    }, []);
    const calculateDifference = () => {
        const differenceInMs = endDate - startDate;
        const differenceInSeconds = differenceInMs / 1000;
        setDifference(differenceInSeconds);
    };

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    }

    const handleClick = () => {
        setIsWorking(!isWorking);
    }

    const formatTime = (seconds) => {
        const getFormattedTime = (time) => time < 10 ? `0${time}` : time;
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${getFormattedTime(hrs)}:${getFormattedTime(mins)}:${getFormattedTime(secs)}`;
    };

    const renderedBadges = lineData.tags != null ? lineData.tags.map((tag) => {
        return <Badge bg={tag.color}>{tag.name}</Badge>
    }) : <FontAwesomeIcon icon="fa-solid fa-tags" />;

    return (
        <Stack direction="horizontal" gap={1} className="session-card-body-line">
            <InputText value={description} onChange={handleChangeDescription} placeholder="What are you working on?" className="w-100" />

            <Stack className="session-bagde-list" direction="horizontal" gap={2}>
                {renderedBadges}
            </Stack>

            <Stack direction="horizontal" gap={1}>
                <span className="timer">{formatTime(difference)}</span>
                <button onClick={handleClick} className="btn btn-start-stop">
                    {!isWorking ? <FontAwesomeIcon icon="fa-solid fa-play" /> : <FontAwesomeIcon icon="fa-solid fa-stop" />}
                </button>
            </Stack>
        </Stack>
    );
}

export default SessionLine;