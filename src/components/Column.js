import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import TaskList from "./TaskList";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;

const Title = styled.h3`
  padding: 8px;
`;

export default function Column({ column, tasks }) {
  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <TaskList tasks={tasks} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Container>
  );
}
