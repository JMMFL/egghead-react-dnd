import styled from "styled-components";
import Task from "./Task";

const Container = styled.div`
  padding: 8px;
`;

export default function TaskList({ tasks }) {
  return (
    <Container>
      {tasks.map((task) => (
        <Task id={task.id} task={task} />
      ))}
    </Container>
  );
}
