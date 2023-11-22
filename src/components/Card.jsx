import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";

export default function Card(props) {
   // console.log(props);
   //* props = { id:.., name:.., onclose: () => {} }

   const dispatch = useDispatch();//* function({type, payload})
   const [isFav, setIsFav] = useState(false);
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(props.is));
      } else {
         setIsFav(true);
         dispatch(addFav(props));
      }
   }
   const myFavorites = useSelector(state => state.myFavorites);
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div
         style={{
            backgroundColor: "grey",
            margin: "20px",
            padding: "20px",
            borderRadius: "15px",
         }}
      >
{
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}

          <button onClick={() => props.onClose(props.id)}>X</button>
         <h2>{props.name}</h2>
         <h4>Id: {props.id}</h4>
         <h4>Status: {props.status}</h4>
         <h4>Specie: {props.species}</h4>
         <h4>Gender: {props.gender}</h4>
         <h4>Origin: {props.origin}</h4>
         <Link to={`/detail/${props.id}`} >
            <img src={props.image} alt={props.name} />
         </Link>
      </div>
   );
}
 //el button onClick ejecuta la funcion onClose que recibe la prop id
 //es ta funcion esta definida app 