import { Fragment } from "react";
import mastersApi from "../api/masters-api";
function useInput(defaultvalue = null) {
    const [value, setValue] = useState(defaultvalue);

    function onChange(event) {
        setValue(event.target.value);
    }

    return { value, onChange };
}

export function MasterForm() {
    const surName = useInput('');
    const firstName = useInput('');
    const patronymic = useInput('');
    const position = useInput('');
    const photo = useInput(null);


    function handleForm(event) {
        event.preventDefault();
        mastersApi.createMaster({ surName, firstName, patronymic, position, photo });
    }

    return (<>
        <form onSubmit={handleForm}>
        
        <label>
            <span>Фамилия</span>
            <input {...surName} />
        </label>

        <label>
            <span>Имя</span>
            <input {...firstName} />
        </label>

        <label>
            <span>Отчество</span>
            <input {...patronymic} />
        </label>

        <label>
            <span>Должность</span>
            <input {...position} />
        </label>

        <label>
            <span>Фотография</span>
            <input type="file" {...photo} />
        </label>

            <button>Добавить</button>
        </form>
    </>);
}