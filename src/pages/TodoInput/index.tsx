import styled from '@emotion/styled';
import { Title } from '../../components/Title';
import { TextInput } from '../../components/TextInput';
import { Button } from '../../components/Button';
import { useContext, useState } from 'react';
import { ToDoListContext } from '../../contexts/ToDoList';
import { ShowInputButton } from '../../components/ShowInputButton';
import { useNavigate } from 'react-router-dom';

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
  z-index: 1;
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToDoInput = () => {
  const navigate = useNavigate();
  const { onAdd } = useContext(ToDoListContext);
  const [todo, setTodo] = useState('');
  const onAddTodo = () => {
    if (todo === '') return;

    onAdd(todo);
    setTodo('');
    navigate('/');
  };
  return (
    <Container>
      <Background />
      <Contents>
        <Title label="할 일 추가" />
        <TextInput value={todo} onChange={setTodo} />
        <Button label="추가" color="#304FFE" onClick={onAddTodo} />
      </Contents>
      <ShowInputButton show={true} onClick={() => navigate('/')} />
    </Container>
  );
};
