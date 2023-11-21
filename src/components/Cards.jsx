import Card from "./Card.jsx"

export default function Cards({ characters, onClose }) {
   // console.log(characters);
   //* props = { characters: [ --- ] }
   //* characters = [ {R}, {M}, {B}, {S} ]
   return (
      <div
         style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly"
         }}
      >
         {
            characters.map(character => (
               <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                  onClose={onClose}
               />
            ))
         }
      </div>
   );
}
//con las llaves indico que voy a trabajar con js y quiero devolver el 
      // codigo html entonces abro árentesis despues del arroefuncion
//para cada character, osea, para cada personaje, voy a hacer una card
// cada card lleva sus propiedades, entonces las renderizamos con su propio valor