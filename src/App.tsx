import './App.css';
import styled from '@emotion/styled';
import {useState} from "react";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.span`
  margin: 0 16px;
  font-size: 1.2rem;
`;

const Button = styled.button`
  border: 0;
  color: #ffffff;
  background-color: #ff5722;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    background-color: #ff5722;
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

function App() {
    const [counter, setCounter] = useState(0)
    const onSubstractClick = () => {
        setCounter(counter-1)
    }
    const onAddClick = () => {
        setCounter(counter+1)
    }
  return (
    <Container>
      <Title>Counter App</Title>
      <Contents>
          <Button onClick={onSubstractClick}>-</Button>
        <Label>{counter}</Label>
          <Button onClick={onAddClick}>+</Button>
      </Contents>
    </Container>
  );
}

export default App;
