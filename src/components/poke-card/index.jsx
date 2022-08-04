import { Card, Col } from "antd"
import React from "react"

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
      <Card
        hoverable
        cover={
          <img
            style={{ width: "100%" }}
            alt="example"
            src={imgURL}
          />
        }
      >
        {name}
      </Card>
    </Col>
  )
}