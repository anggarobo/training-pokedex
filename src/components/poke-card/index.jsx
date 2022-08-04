import { Card, Col, Skeleton, Space, Typography } from "antd"
import React from "react"
import styled from "styled-components";

const StyledCard = styled(Card)`
  border-radius: 1rem;
  background-color: #f0f2f5;
  border: solid 1px rgba(0, 0, 0, 0.1);
  padding: .5rem;
  .ant-card-body {
    padding: .5rem .5em 0 .5rem;
  }
`;

export default function PokeCard({ name, url }) {
  const [ imgURL, setImgURL ] = React.useState('')

  React.useEffect(() => {
    ( async () => {
      try {
        const response = await fetch(url)
        const result = await response.json()
        setImgURL(result?.sprites?.other?.home?.front_default);
      } catch (err) {
        console.log(err);
      }
    } )()
  }, [url])

  return (
    <Col span={8}>
      <StyledCard
        hoverable
        cover={
          imgURL ? (
            <img
              style={{
                width: "100%",
                border: `solid 1px rgba(0,0,0,.1)`,
                borderRadius: ".5rem",
                backgroundColor: "white",
              }}
              alt={name}
              src={imgURL}
            />
          ) : (
            <img
              style={{ width: "100%", height: 180, backgroundColor: "#e9e9ea", borderRadius: '.5rem' }}
            />
          )
        }
      >
        <Typography.Title level={5} ellipsis>
          {name ? (
            name[0].toUpperCase() + name.slice(1)
          ) : (
            <Skeleton.Input active block />
          )}
        </Typography.Title>
      </StyledCard>
    </Col>
  );
}