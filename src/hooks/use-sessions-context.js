import { useContext } from 'react';
import SessionsContext from '../context/sessions';

function useSessionsContext() {
  return useContext(SessionsContext);
}

export default useSessionsContext;
