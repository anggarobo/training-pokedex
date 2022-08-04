import React from "react";
import { Divider, Layout, Row, Typography } from "antd";
import PokeCard from "./components/poke-card";
import ButtonGroup from "./components/button-group";
import styled from "styled-components";
// import "./styles.css";

const StyledLayout = styled(Layout)`
  padding: 2rem 24rem;
  background-color: #e9e9ea;
`;

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
    <StyledLayout>
      <Typography.Title>Pokedex</Typography.Title>
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24 },
          { xs: 8, sm: 16, md: 24 },
        ]}
      >
        {pokes &&
          pokes?.data?.map((poke) => (
            <PokeCard key={`${poke.name + poke.url}`} {...poke} />
          ))}
      </Row>
      <Divider />
      <ButtonGroup pokes={pokes} setURL={setURL} />
    </StyledLayout>
  );
}
