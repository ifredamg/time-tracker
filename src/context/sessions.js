import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const SessionsContext = createContext();

function SessionsProvider({ children }) {
    const [sessions, setSessions] = useState([]);

    const fetchSessions = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/sessions');

        setSessions(response.data);
    }, []);

    const editSessionById = async (IDTempo, Descricao) => {
        const response = await axios.put(`http://localhost:3001/sessions/${IDTempo}`, {
            Descricao,
        });

        const updatedSessions = sessions.map((session) => {
            if (session.IDTempo === IDTempo) {
                return { ...session, ...response.data };
            }

            return session;
        });

        setSessions(updatedSessions);
    };

    const deleteSessionById = async (IDTempo) => {
        await axios.delete(`http://localhost:3001/sessions/${IDTempo}`);

        const updatedSessions = sessions.filter((session) => {
            return session.IDTempo !== IDTempo;
        });

        setSessions(updatedSessions);
    };

    const createSession = async (description) => {
        const response = await axios.post('http://localhost:3001/sessions', {
            Descricao: description,
        });

        const updatedSessions = [...sessions, response.data];
        setSessions(updatedSessions);
    };


    const valueToShare = {
        sessions,
        deleteSessionById,
        editSessionById,
        createSession,
        fetchSessions,
    };

    return (
        <SessionsContext.Provider value={valueToShare}>
            {children}
        </SessionsContext.Provider>
    );
}

export { SessionsProvider };
export default SessionsContext;