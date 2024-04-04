import './App.css';
import styled from '@emotion/styled';
import { DataView } from './components/DataView';
import { useState } from 'react';
import { ToDoInput } from './components/TodoInput';
import { ShowInputButton } from 'components/ShowInputButton';
import { InputContainer } from 'components/InputContainer';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

function App() {
  const [toDoList, setToDoList] = useState(['리액트 공부하기', '운동하기', '책읽기']);

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  const onAdd = (todo: string) => {
    setToDoList([...toDoList, todo]);
  };

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <InputContainer onAdd={onAdd} />
    </Container>
  );
}

export default App;
