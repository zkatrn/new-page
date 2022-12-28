import * as React from 'react';
import './style.css';
import data from './memes.json';
import DataView from './src/data-view';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <DataView data={data.data.memes} />
    </div>
  );
}
