import React, { useState } from "react";
import "./styles.css";

const movieList = {
  Action: [
    "1. The Dark Knight (2008) -- ⭐9.0",
    "2. The Lord of the Rings: The Return of the King (2003) -- ⭐8.9",
    "3. Inception (2010) -- ⭐8.8",
    "4. The Matrix (1999) -- ⭐8.7"
  ],

  Comedy: [
    "1. Parasite (2019) -- ⭐8.6",
    "2. Life Is Beautiful (1997) -- ⭐8.6",
    "3. The Intouchables (2011) -- ⭐8.5",
    "4. Back to the Future (1985) -- ⭐8.5"
  ],

  ScienceFiction: [
    "1. Frankenstein (2011) -- ⭐8.7",
    "2. Star Wars: Episode V - The Empire Strikes Back (1980) -- ⭐8.7",
    "3. Interstellar (2014) -- ⭐8.6",
    "4. Star Wars: Episode IV - A New Hope (1977) -- ⭐8.6"
  ],

  Romance: [
    "1. Forrest Gump (1994) -- ⭐8.8",
    "2. Life Is Beautiful (1997) -- ⭐8.6",
    "3. Your Name. (2016) -- ⭐8.4"
  ]
};

function App() {
  const [items, setItem] = useState("");
  const [movie, setMovie] = useState("");
  function clickHandler(id, movie) {
    switch (id) {
      case 1:
        setItem(movieList.Action);
        setMovie(movie);
        break;
      case 2:
        setItem(movieList.Comedy);
        setMovie(movie);
        break;
      case 3:
        setItem(movieList.ScienceFiction);
        setMovie(movie);
        break;
      case 4:
        setItem(movieList.Romance);
        setMovie(movie);
        break;
      default:
        return "Error : There's a problem, please try after sometime";
    }
  }

  return (
    <div className="App">
      <h1 className="header"> Movie Selector</h1>
      <h2 className="para">
        Best movies to watch{" "}
        <span className="span">from different genres.....</span>{" "}
      </h2>
      <button onClick={() => clickHandler(1, "Action")}>Action</button>
      <button onClick={() => clickHandler(2, "Comedy")}>Comedy</button>
      <button
        onClick={() => {
          clickHandler(3, "ScienceFiction");
        }}
      >
        ScienceFiction
      </button>
      <button
        onClick={() => {
          clickHandler(4, "Romance");
        }}
      >
        Romance
      </button>

      <div>
        <h2 className="movieName">{movie}</h2>
      </div>

      <div className="listItem">
        <h3>{items[0]}</h3>
      </div>
      <div className="listItem">
        <h3>{items[1]}</h3>
      </div>
      <div className="listItem">
        <h3>{items[2]}</h3>
      </div>
      <div className="listItem">
        <h3>{items[3]}</h3>
      </div>
      <div className="listItem">
        <h3>{items[4]}</h3>
      </div>
    </div>
  );
}

export default App;
