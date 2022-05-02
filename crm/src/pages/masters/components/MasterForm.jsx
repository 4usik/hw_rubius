import { useEffect } from "react";
import MastersApi from "../../../api/masters-api";
import { useInput } from '../../../hooks';


export function MasterForm({ master }) {
    const surName = useInput('');
    const firstName = useInput('');
    const patronymic = useInput('');
    const position = useInput('');
    const photo = useInput(null);

    // const [surName, setSurName] = useState('');
    // const [firstName, setFirstName] = useState('');

    function handleForm(event) {
        event.preventDefault();
        MastersApi.createMaster({ surName, firstName, patronymic, position, photo });
    }
    
    useEffect(() => {
        // Object.keys(master).forEach(key => this[key]?.setValue(master[key]));
        // surName.setValue(master.surName);
    }, [master])

    return (<>
        <form className="add-form" onSubmit={handleForm}>
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

            <button className="add">Добавить</button>

        </form>
        
    </>);
}