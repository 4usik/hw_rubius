import { OrderForm } from '../orders/components/OrderForm';
import { OrdersFilter } from '../orders/components/OrdersFilter';
import { OrdersList } from '../orders/components/OrdersList';
import { OrdersProvider } from './OrdersContext';

export function OrdersPage() {
    return (
    <>
    <h1>Заявки</h1>
        
        <OrdersProvider>
            <OrdersFilter />
            <OrdersList />
            <OrderForm />
        </OrdersProvider>
    </>
    
    );
}