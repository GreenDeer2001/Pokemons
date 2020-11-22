import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

const Card = ({ name, url }) => {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios.get(url).then((res) => {
      setPokemon(res.data);
      setLoading(false);
    });
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <article className="card">
      <div className="card-center">
        <div className="card-img-box">
          <img className="card-img" src={pokemon.sprites.back_default} alt="" />
        </div>
        <div className="card-info">
          <h2>{name}</h2>
          <Link to={`/${name}`}  className="card-btn">More Info</Link>
        </div>
      </div>
    </article>
  );
};

export default Card;
