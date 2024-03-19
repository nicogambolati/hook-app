import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import { HooksApp } from './HooksApp'
// import { CounterApp } from './useState/CounterApp'
import { CounterWithCustomHook } from './useState/CounterWithCustomHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp />
    <CounterApp /> */}
    <CounterWithCustomHook />
  </React.StrictMode>,
)
