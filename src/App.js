import React from "react";
import { Layout, Row, Typography } from "antd";
import PokeCard from "./components/poke-card";
import ButtonGroup from "./components/button-group";
// import "./styles.css";

export default function App() {
  const [pokes, setPokes] = React.useState({});
  const [url, setURL] = React.useState("https://pokeapi.co/api/v2/pokemon/");

  React.useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokes({
          nextURL: data?.next,
          prevURL: data?.previous,
          data: data?.results,
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, [url]);

  return (
    <Layout>
      <Typography.Title>Pokedex</Typography.Title>
      <Row>
        {pokes &&
          pokes?.data?.map((poke) => (
            <PokeCard key={`${poke.name + poke.url}`} {...poke} />
          ))}
      </Row>
      <ButtonGroup pokes={pokes} setURL={setURL} />
    </Layout>
  );
}
