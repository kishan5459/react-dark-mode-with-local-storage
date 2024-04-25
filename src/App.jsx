import { useState } from 'react'
import './App.css'
import { Toggle } from './components/Toggle/Toggle';
import useLocalStorage from 'use-local-storage';

function App() {
  // const [isDark,setIsDark] = useState(false);
  // const [isDark,setIsDark] = useLocalStorage('isDark',false);

  const preferences = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDark,setIsDark] = useLocalStorage('isDark',preferences);

  return (
    <div className='App' data-theme={isDark ? 'dark' : 'light'}>
      <Toggle
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />
      <h1 className='title'>Hello world !!!</h1>
      <div className='box'>
        <h2>This is a box</h2>
      </div>
    </div>
  )
}

export default App
