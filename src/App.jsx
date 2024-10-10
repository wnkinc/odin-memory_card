import { useState, useEffect } from "react";
import Structure from "./components/structure";
import "./App.css";

function App() {
  const [image, setImage] = useState(""); // Initialize image state

  useEffect(() => {
    // Fetch Pokémon data and update the image state
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((response) => response.json())
      .then((data) => {
        console.log(`Name: ${data.name}`);
        console.log(`Height: ${data.height}`);
        console.log(`Weight: ${data.weight}`);
        console.log(`Ability: ${data.abilities[0].ability.name}`);
        setImage(data.sprites.front_default); // Set image in state
      })
      .catch((error) => {
        console.error("Error fetching Pokémon data:", error);
      });
  }, []); // The empty array ensures this runs only once when the component mounts

  return (
    <div>
      <h1>Pokémon Card</h1>
      <Structure image={image} /> {/* Pass image as a prop */}
    </div>
  );
}

export default App;
