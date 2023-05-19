import React, { useState } from "react";

import './App.css';
import AdminPanel from './AdminPanel';
import HomePanel from './HomePanel';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function App() {
  const [dataType, setdataType] = useState('data');

  const changeDataSource = (type) => {
    if (type !== dataType)
      setdataType(type);
  }

  return (
    <div className="App">

      <AdminPanel dataType={dataType}></AdminPanel>
      <HomePanel dataHandler={changeDataSource}></HomePanel>
    </div>
  );
}

export default App;
