import SearchBar from './SearchBar'
import { NavLink } from "react-router-dom";


export default function Nav(props) {

  return (
     <div>
         <NavLink to="/home">
            <button>Home</button>
         </NavLink>
         <NavLink to="/favorites">
            <button>Favorites</button>
         </NavLink>
         <NavLink to="/about">
            <button>About</button>
         </NavLink>
         <button onClick={props.logout} >Logout ❌</button>
         <hr />
        <SearchBar onSearch={props.onSearch} />
     </div>
  );
}