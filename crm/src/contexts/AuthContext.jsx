import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppApi } from "../api";
import pubsubService from "../services/pubsub-service";
import TokenService from "../services/token-service";

const AuthContext = createContext();

export function AuthProvider({ children }) { /* передает контекст во все вложенные элементы */
    const [isAuth, setIsAuth] = useState(TokenService.isTokenValid()); /* Состояние: авторизовался ли пользователь */
    const navigate = useNavigate();

    async function login(loginData) {
        try {
            const { access_token } = await AppApi.login(loginData);
            TokenService.setToken(access_token);

            setIsAuth(true);
            navigate('/');
        } catch(e) {
            setIsAuth(false);

            if (e.message) {
                alert(e.message);
            }
        }
    }

    function logout() {
        setIsAuth(false);
        navigate('/login');
        TokenService.removeToken();
    }

    pubsubService.on('logout', logout);

    const context = { isAuth, login, logout }; /* данные контекста */

    return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);