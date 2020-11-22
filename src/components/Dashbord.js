import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
const API = "https://pokeapi.co/api/v2/pokemon?limit=20";

const Dashbord = () => {
  const [url, setUrl] = useState(API);
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    axios
      .get(url, {
        cancelToken: source.token,
      })
      .then((response) => {
        let data = response.data;
        setNext(data.next);
        setPrev(data.previous);
        setPokemons(data.results);
        setLoading(false);
      })
      .catch((e) => console.log(e));

    return () => source.cancel();
  }, [url]);

  const nextHandler = () => {
    setUrl(next);
  };
  const prevHandler = () => {
    setUrl(prev);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <section className="dashbord">
      <div className="dashbord-center">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.name} {...pokemon} />
        ))}
      </div>
      {prev && (
        <button onClick={prevHandler} className="btn prev">
          {" "}
          {"<-"}{" "}
        </button>
      )}
      {next && (
        <button onClick={nextHandler} className="btn next">
          {" "}
          {"->"}
        </button>
      )}
    </section>
  );
};

export default Dashbord;
