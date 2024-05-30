import './css/session.css';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import InputText from './Input/InputText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SessionLine({ lineData }) {
    const [isWorking, setIsWorking] = useState(false);
    const [description, setDescription] = useState(lineData.Descricao);

    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    }

    const handleClick = () => {
        setIsWorking(!isWorking);
    }

    const renderedBadges = lineData.Classificacoes != null ? lineData.Classificacoes.map((classificacao) => {
        return <Badge bg={classificacao.Cor}>{classificacao.Nome}</Badge>
    }) : <FontAwesomeIcon icon="fa-solid fa-tags" />;

    return (
        <Stack direction="horizontal" gap={1} className="session-card-body-line">
            <InputText value={description} onChange={handleChangeDescription} placeholder="What are you working on?" className="w-100" />

            <Stack className="session-bagde-list" direction="horizontal" gap={2}>
                {renderedBadges}
            </Stack>

            <Stack direction="horizontal" gap={1}>
                <span className="timer">00:00:00</span>
                <button onClick={handleClick} className="btn btn-start-stop">
                    {!isWorking ? <FontAwesomeIcon icon="fa-solid fa-play" /> : <FontAwesomeIcon icon="fa-solid fa-stop" />}
                </button>
            </Stack>
        </Stack>
    );
}

export default SessionLine;