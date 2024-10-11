import { useState, useEffect } from "react";
import Structure from "./components/structure";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const pokémon = [
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

    // Use Promise.all to fetch data for all Pokémon and set images once
    Promise.all(
      pokémon.map((poké) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${poké}`)
          .then((response) => response.json())
          .then((data) => data.sprites.front_default)
      )
    )
      .then((fetchedImages) => {
        setImages(fetchedImages);
      })
      .catch((error) => {
        console.error("Error fetching Pokémon data:", error);
      });
  }, []);

  return (
    <>
      <header>
        <div className="score">
          <div className="text">Score:</div>5
        </div>
        <div className="score">
          <div className="text">High Score:</div>10
        </div>
      </header>
      <h1>Pokémon Card</h1>
      <Structure images={images} />
    </>
  );
}

export default App;
