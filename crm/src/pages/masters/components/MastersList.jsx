import { useMasters } from "../MastersContext";
import { Master } from "./Master";

export function MastersList() {
    const { masters } = useMasters();

    if (masters?.length === 0) {
        return <p>Нет данных</p>};

    return (
        /* Возвращает массив элементов с результатом вызова указанной функции для каждого элемента массива;
           возвращает список карточек мастеров, присваивая id в div значения с сервера */
        <div className="row">
            {masters?.map(item => (
                <div key={item.id} className="col">
                    <Master data={item}/>
                </div>
            ))}
        </div>
    )
}