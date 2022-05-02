import { useInput } from '../../hooks';

export default function AuthForm({ onLogin }) { /* переменные для сбора данных */
    const loginInput = useInput();
    const passwordInput = useInput();

    function reset() { /* сброс формы после успешной авторизации */
        loginInput.setValue('');
        passwordInput.setValue('');
    }

    function handleSubmit(e) {
        /* метод отрабатывает на событие, передавая данные из формы для обработки */
        e.preventDefault();

        const data = {
            userName: loginInput.value,
            password: passwordInput.value
        };

        onLogin(data);
        reset();
    }

    return(
        <form className="add-form" onSubmit={handleSubmit}>
            <label>
                <span>Логин</span>
                <input {...loginInput} placeholder="Введите логин" />
            </label>
        
            <label>
                <span>Пароль</span>
                <input {...passwordInput} type="password" placeholder="Введите пароль" />
            </label>
        
            <button className="add">Войти</button>
        </form>
    );

}
