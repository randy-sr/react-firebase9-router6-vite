import { useContext } from 'react';
import { UserContext } from '../context/UserProvider';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate()

    const handleClickLogin = () => {
        setUser(!user)
        navigate('/')
    }

    return (
        <div>
            <h1>Login</h1>
            <h2>
                {user ? `Bienvenido ` : 'No has iniciado sesión'}
            </h2>
            <button onClick={ handleClickLogin }>Acceder</button>
        </div>
    )
}
