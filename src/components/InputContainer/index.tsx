import { ShowInputButton } from 'components/ShowInputButton';
import { ToDoInput } from 'pages/TodoInput';
import { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = () => {
  const [showTodoInput, setShowTodoInput] = useState(false);
  const onClose = () => {
    setShowTodoInput(false);
  };
  return (
    <Container>
      {showTodoInput && <ToDoInput />}
      <ShowInputButton show={showTodoInput} onClick={() => setShowTodoInput(!showTodoInput)} />
    </Container>
  );
};
