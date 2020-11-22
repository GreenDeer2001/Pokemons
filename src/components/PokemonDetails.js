import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom"
import axios from "axios";

const URL = "https://pokeapi.co/api/v2/pokemon/"

const PokemonDetails = () => {

    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);
    let {id} = useParams();

  
  useEffect(() => {
    setLoading(true);

    axios.get(`${URL}${id}`).then((res) => {
      setPokemon(res.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

    return (
        <section className="detail">
        <div className="detail-center">
          <div className="detail-img-box">
            <img className="detail-img" src={pokemon.sprites.back_default} alt="" />
          </div>
          <div className="detail-info">
            <h2>{pokemon.name}</h2>
          
          </div>
        </div>
      </section>
    )
}

export default PokemonDetails
