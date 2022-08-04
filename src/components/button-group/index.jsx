import { Button } from "antd";
import styled from "styled-components";


const ButtonWrapper = styled.div`
  padding: 1rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

export default function ButtonGroup({pokes, setURL}) {
  const handleNext = (e) => {
    const id = e.currentTarget.id;
    console.log(id);
    setURL(pokes?.[id]);
  };
  return (
    <ButtonWrapper>
      {pokes?.prevURL && (
        <Button
          id="prevURL"
          onClick={handleNext}
          type="default"
          shape="round"
          size={2}
        >
          Previous
        </Button>
      )}
      <Button
        id="nextURL"
        onClick={handleNext}
        type="primary"
        shape="round"
        size={2}
      >
        Next
      </Button>
    </ButtonWrapper>
  );
}