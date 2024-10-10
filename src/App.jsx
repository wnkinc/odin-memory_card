import { useState, useEffect } from "react";
import Structure from "./components/structure";
import "./App.css";

function App() {
  const [images, setImages] = useState([]); // Initialize image state

  useEffect(() => {
    const pokemon = [
      "pikachu",
      "ninetales",
      "mew",
      "totodile",
      "piplup",
      "lugia",
      "flygon",
      "typhlosion",
      "arcanine",
      "luxray",
      "snorlax",
      "rowlet",
    ];

    // Fetch Pokémon data for each Pokémon in the array
    pokemon.forEach((poke) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
        .then((response) => response.json())
        .then((data) => {
          setImages((prevImages) => [
            ...prevImages, // Spread the previous images
            data.sprites.front_default, // Add the new image
          ]);
        })
        .catch((error) => {
          console.error(`Error fetching ${poke} data:`, error);
        });
    });
  }, []); // The empty array ensures this runs only once when the component mounts

  return (
    <div>
      <h1>Pokémon Card</h1>
      <Structure images={images} /> {/* Pass image as a prop */}
    </div>
  );
}

export default App;
