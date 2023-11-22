import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <Provider store={store}>
     <BrowserRouter>
 <App />
 </BrowserRouter>
 </Provider>
 </React.StrictMode>

    
  
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
// asi viene por default, dai recomienda borrar el stricmode para que nos deje trabajar mas agusto
// este archivo main es que recibe todos los componentes y los renderiza