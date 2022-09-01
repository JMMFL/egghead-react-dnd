import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import ColumnList from "./components/ColumnList";
import inital from "./data";

export default function App() {
  const [data, setData] = useState(inital);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    const { droppableId: desDropId, index: desIndex } = destination;
    const { droppableId: souDropId, index: souIndex } = source;

    if (!destination) return;
    if (desDropId === souDropId && desIndex === souIndex) return;

    const column = data.columns[souDropId];
    const newTaskIds = [...column.taskIds];
    newTaskIds.splice(souIndex, 1);
    newTaskIds.splice(desIndex, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
    };

    setData(newData);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ColumnList {...data} />
    </DragDropContext>
  );
}
