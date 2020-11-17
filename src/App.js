import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css'
import LeftBar from './components/LeftBar';
import Task from './components/Task';

const App = () => {
  
  const [delBtn, setDelBtn] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <h1 style={{textAlign: 'left', width: '90%', margin: 'auto'}}>Create New Quiz</h1>
        <LeftBar delBtn={delBtn} setDelBtn={setDelBtn} />
        <Switch>
          <Route exact path="/add"><Task delBtn={delBtn} setDelBtn={setDelBtn} /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;