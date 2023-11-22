import React from "react";

export default function SearchBar(props) {

   const [id, setId] = React.useState(""); //* [ Estado, manejador]
   const handleChange = event => {
      const {value} = event.target;
      // console.log(value);
      setId(value);
      //creamos un estado id, que al recibir el evento 
      //setea el estado con el nuevo valor del input
   }

   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
      // la funcion handleClick recibe el evento y ejecuta  el onSearch y  setea el valor del input a un string vacio
   }
   //* Traer Character Random
   const handleRandom = () => {
		const randomNumber = Math.floor(Math.random() * 826) + 1;
		props.onSearch(randomNumber);
	};
   
   return (
      <div>
         <input
            type="text"
            name="search"
            id="search"
            onChange={handleChange}
            value={id}
         />
         <button onClick={handleClick}>Agregar</button>
         {/* Traer Character Random */}
         <button onClick={handleRandom}>Random</button>
      </div>
   );
}
// en button, no podemos psar la propiedad directa al onclick porque se ejeceuta de inmediato
//necesito pasarle una funcion flecha para que ejecute la funcion () =>
//pero solo cuando le damos el click
//onClick={() => props.onSearch('Id: 1')
