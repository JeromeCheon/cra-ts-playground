import styled from '@emotion/styled';
import { TodoItem } from '../TodoItem';
import { useContext } from 'react';
import { ToDoListContext } from '../../contexts/ToDoList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TodoList = () => {
  const { toDoList, onDelete } = useContext(ToDoListContext);

  return (
    <Container>
      {toDoList.map((todo) => (
        <TodoItem
          label={todo}
          key={todo}
          onDelete={() => {
            if (typeof onDelete === 'function') onDelete(todo);
          }}
        />
      ))}
    </Container>
  );
};
