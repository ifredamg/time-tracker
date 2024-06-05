import { createContext, useState, useCallback } from 'react';
import axios from 'axios';

const SessionsContext = createContext();

function SessionsProvider({ children }) {
    const [sessions, setSessions] = useState([]);

    const fetchSessions = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/sessions');

        setSessions(response.data);
    }, []);

    const editSessionById = async (id, description) => {
        const response = await axios.put(`http://localhost:3001/sessions/${id}`, {
            description,
        });

        const updatedSessions = sessions.map((session) => {
            if (session.id === id) {
                return { ...session, ...response.data };
            }

            return session;
        });

        setSessions(updatedSessions);
    };

    const deleteSessionById = async (id) => {
        await axios.delete(`http://localhost:3001/sessions/${id}`);

        const updatedSessions = sessions.filter((session) => {
            return session.id !== id;
        });

        setSessions(updatedSessions);
    };

    const createSession = async (startDate, endDate, description, project) => {
        const maxid = sessions.reduce((maxId, session) => {
            return session.id > maxId ? session.id : maxId;
        }, 0);

        const newID = maxid + 1;

        const response = await axios.post('http://localhost:3001/sessions', {
            id: newID,
            description,
            start_date: startDate,
            end_date: endDate,
            project,
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