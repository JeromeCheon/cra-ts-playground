import './App.css';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Button } from './components/Button';
import { Label } from './components/Label';

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

function App() {
  const [counter, setCounter] = useState(0);
  const onSubstractClick = () => {
    setCounter(counter - 1);
  };
  const onAddClick = () => {
    setCounter(counter + 1);
  };
  return (
    <Container>
      <Title>Counter App</Title>
      <Contents>
        <Button label={'-'} onClick={onSubstractClick} />
        <Label data={counter} />
        <Button label={'+'} onClick={onAddClick} />
      </Contents>
    </Container>
  );
}

export default App;
