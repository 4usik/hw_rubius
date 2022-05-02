import { Navigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { useAuth } from "../../contexts/AuthContext";

export function LoginPage() {
    const { isAuth, login } = useAuth(); /* импортируем функцию из контекста */

    if (isAuth) {
        return <Navigate to="/" />;
    }

    return (<>
        <h1>Login Page</h1>
        <AuthForm onLogin={login} /> {/**получает данные из формы */}
    </>)
}