import { MasterForm, MastersList, MastersFilter } from './components';
import { MastersProvider } from './MastersContext';

export function MastersPage() {
    return (
        <>

            <h1>Мастера</h1>
        
            <MastersProvider>
                <MastersList />
                <MastersFilter />
                <MasterForm />
            </MastersProvider>
        </>
    );
}