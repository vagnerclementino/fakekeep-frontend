import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './mocks/notes'
import NotePanel from './components/NotePanel'

function App() {
  return (
    <div className="App">
      <NotePanel notes={data}/>
    </div>
  );
}

export default App;
