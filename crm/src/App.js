/*import logo from './logo.svg';
import './App.css';

import { DatePicker } from 'antd';

ReactDOM.render(<DatePicker />, mountNode);
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

import React, { useState, useEffect } from 'react';
import './style.scss';

import MastersApi from './api/masters-api';
import { Master } from './components/Master';
import { MasterForm } from './components/MasterForm';

export default function App() {
  const [masters, setMasters] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    MastersApi.getMasters(value).then(setMasters);
  }, [value]);

  function removeMaster(masterId) {
    const filteredMasters = masters.filter((master) => master.id !== masterId);
    setMasters(filteredMasters);
  }

  return (
    <div className="container">
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
        placeholder="Введите имя"
        />
        <br />
        <br />

        <MasterForm/>

        {masters?.length === 0 && <p>Нет данных</p>}

        <div className="row">
          {masters?.map(item => (
            <div key={item.id} className="col">
              <Master data={item} onRemove={() => removeMaster(item/id)} />
              </div>
          ))}
        </div>
    </div>
  );
}

