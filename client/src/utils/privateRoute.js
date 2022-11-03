import { useAuth } from '../utils/authContext';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivatePath = ({ children }) => {
    const { currentUser } = useAuth();
    const location = useLocation();

    if (!currentUser) {
        return <Navigate to='/login' state={{ path: location.pathname }} />;
    } else {
        return children;
    }
};
