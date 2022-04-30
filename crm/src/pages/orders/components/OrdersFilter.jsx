import { useOrders } from "../OrdersContext";

export function OrdersFilter() {
    const { search, setSearch } = useOrders();
    const { from, setFrom } = useOrders();
    const { to, setTo } = useOrders();
    const { status, setStatus } = useOrders();
    
    return (<div className="search-list">
        <label>
            <span>Введите имя:</span>
            <input className="search" type="text" value={search} onChange={event => setSearch(event.target.value)} placeholder="Введите имя"/>
        </label>

        <label>
            <span>Введите дату:</span>
            <input className="search" type="text" value={from} onChange={event => setFrom(event.target.value)} placeholder="Введите дату от"/>
        </label>

        <label>
            <span>Введите дату:</span>
            <input className="search" type="text" value={to} onChange={event => setTo(event.target.value)} placeholder="Введите дату до"/>
        </label>

        <label>
            <span>Введите статус заявки:</span>

            {/* <select name="status">
              <option value="">Не выбран</option>
              <option value={status}>Opened</option>
              <option value={status}>Closed</option>
            </select> */}

            <input className="search" type="text" value={status} onChange={event => setStatus(event.target.value)} placeholder="Введите статус заявки"/>
        </label>

    </div>
    )
}