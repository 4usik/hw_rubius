import React, {useEffect, useState, useContext} from 'react';
import { createContext } from 'react';
import MastersApi from '../../api/masters-api';

export const MastersContext = createContext(null); /* Передает значение во все вложенные компоненты (в children) */

export function MastersProvider({ children }) {
    /* Возвращает разметку MastersContext, передавая во все вложенные компоненты value, по сути createContext(null -> value) */
    const [masters, setMasters] = useState([]); /*  */
    const [search, setSearch] = useState('');

    useEffect(() => { /* Выводит элементы, которые соответсвуют полученному значению search */
        MastersApi.getMasters(search).then(setMasters); /* получает данные мастеров с сервера
        и записывает полученные объекты в masters посредством setMasters,
        search получаем из input MasterFilter */
    }, [search]);

    function removeMaster(masterId) {/* создает новый массив, со всеми элементами, прошедшими проверку,
    задаваемую в переданной функции, masterId передается из Master.jsx */
        const filteredMasters = masters.filter(master => master.id !== masterId);
        setMasters(filteredMasters);
    }
    
    return <MastersContext.Provider  value={{ masters, removeMaster, search, setSearch }}>
        {children} 
    </MastersContext.Provider>
}

export const useMasters = () => useContext(MastersContext);/* Передает значения search, setSearch из input в MastersContext;
masters;
removeMaster из Master.jsx */