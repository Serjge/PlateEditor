import { plainTextValue } from 'basicValue';
import { PlateEditor } from 'PlateEditor/PlateEditor';
import { MyValue } from 'PlateEditor/types';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [ value, setValue ] = useState<MyValue>()
  console.log(value)

  return (
    <div className="app">
      <div className="app-wrapper">
        <h1 className={ 'title' }>Plate editor</h1>

        <PlateEditor
          className={ 'container' }
          onChange={ setValue }
          value={ value }
          initialValue={ plainTextValue }
        />

        <h2 className={ 'title' }>Plate editor read only</h2>

        <PlateEditor className={ 'container' }
                     initialValue={ plainTextValue }
                     hiddenToolbar
                     readOnly
        />

      </div>
    </div>
  );
}

export default App;
