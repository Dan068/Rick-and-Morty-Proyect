import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <App />
  
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
// asi viene por default, dai recomienda borrar el stricmode para que nos deje trabajar mas agusto
// este archivo main es que recibe todos los componentes y los renderiza