import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function tick() {
  const element = (
    <div className='body'>
      <div className='main'>
        <div>
          <h1>Local Time</h1>
          <h2 >{new Date().toLocaleTimeString()}.</h2>
        </div>
      </div>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);