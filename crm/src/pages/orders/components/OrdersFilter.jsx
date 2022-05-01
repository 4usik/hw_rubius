import { useOrders } from "../OrdersContext";
import { BuildStatusSelect} from "./Order";

export function OrdersFilter() {
    const { search, setSearch } = useOrders();
    const { from, setFrom } = useOrders();
    const { to, setTo } = useOrders();
    const { status, setStatus, statusesOfOrders } = useOrders();
    
    return (<div className="search-list">
        <label>
            <span>Введите имя:</span>
            <input className="search" type="text" value={search} onChange={event => setSearch(event.target.value)} placeholder="Введите имя"/>
        </label>

        <label>
            <span>Введите дату:</span>
            <input className="search" type="date" value={from} onChange={event => setFrom(event.target.value)} placeholder="Введите дату от"/>
        </label>

        <label>
            <span>Введите дату:</span>
            <input className="search" type="date" value={to} onChange={event => setTo(event.target.value)} placeholder="Введите дату до"/>
        </label>

        <label>
            <span>Введите статус заявки:</span>
            <select value = {status} onChange={e => setStatus(e.target.value)}>
              <option value = "">Не выбран</option>
              <>
                {statusesOfOrders.map(item => (
                  <BuildStatusSelect data={item}/>
                ))}
              </>
            </select>

            {/* <input className="search" type="text" value={status} onChange={event => setStatus(event.target.value)} placeholder="Введите статус заявки"/> */}
        </label>

    </div>
    )
}