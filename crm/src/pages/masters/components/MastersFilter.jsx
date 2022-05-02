import { useMasters } from "../MastersContext";

export function MastersFilter() { /* значение из input и изменение этого значения передаются в хук useMasters */
    const { search, setSearch } = useMasters();

    return (
        <label>
            <span>Поиск:</span>
            <input className="search" type="text" value={search} onChange={event => setSearch(event.target.value)} placeholder="Введите имя"/>
        </label>
    )
}