import './App.css';
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'
import Form from './components/Form.jsx';
import NotFound from './components/NotFound.jsx'

//https://rym2.up.railway.app/api/character/10?key=henrystaff
//const onClose = (id) => {}


const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";

function App() {
   
   const navigate = useNavigate();
   const location = useLocation();

   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      const characterId = characters.filter(
         char => char.id === Number(id)
      )
      if(characterId.length) {
         return alert(`${characterId[0].name} ya existe!`)
      }
      axios(`${URL}/${id}?key=${API_KEY}`)
         .then(
            ({ data }) => {
               if (data.name) {
                  // console.log(data)
                  setCharacters([...characters, data]);
               } else {
                  window.alert('¡El id debe ser un número entre 1 y 826!');
               }
            });
      navigate("/home");
   }

   const onClose = id => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }

   //* Login
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '123456';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else {
         alert("Credenciales incorrectas!");
      }
   }

   function logout() {
      setAccess(false);
   }

   useEffect(() => {
      //* Logueo automático
      // !access && navigate('/home');
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         {
            location.pathname !== "/" ? <Nav onSearch={onSearch} logout={logout} /> : null
         }
         <Routes>
            <Route
               path="/"
               element={<Form login={login} />}
            />
            <Route 
               path="/home"
               element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route
               path="/about"
               element={<About />}
            />
            <Route
               path="/detail/:id"
               element={<Detail />}
            />
            <Route
               path="*"
               element={<NotFound />}
            />
         </Routes>
         <hr />
      </div>
   );
}

export default App;