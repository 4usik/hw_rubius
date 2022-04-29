import { useOrders } from "../OrdersContext";

export function OrdersFilter() {
    const { search, setSearch } = useOrders();

    return (
        <input type="text" value={search} onChange={event => setSearch(event.target.value)} placeholder="Введите дату"/>
    )
}