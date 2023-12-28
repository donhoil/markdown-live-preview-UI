import './App.css';
import { useState } from 'react';
import InputEditor from './components/inputEditor';
import MarkDownPreview from './components/mardownPreview';
import { MarkDownValue } from './constants';

function App() {

  const[value, setValue]=useState(MarkDownValue);

  return (
    <div className='main'>
      <h2 className='header'>Markdown Live Preview</h2>
      <div className='container'>
        <InputEditor value={value} setValue={setValue} />
        <MarkDownPreview  value={value} />
      </div>
    </div>
  );
}

export default App;
