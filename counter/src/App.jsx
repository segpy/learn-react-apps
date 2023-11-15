import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <form action="">
        <button type="submit"></button>
      </form>
      <h1>Vite + React</h1>
      <div className="card">
        <div className="counter-container">
          <button onClick={() => setCount((count) => count + 1)} type="button">
            +1
          </button>
          <span>{count}</span>
          <button onClick={() => setCount((count) => count - 1)} type="button">
            -1
          </button>
        </div>
        <button onClick={() => setCount(0)}>reset</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
