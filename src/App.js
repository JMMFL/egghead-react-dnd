import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import ColumnList from "./components/ColumnList";
import inital from "./data";

export default function App() {
  const [data, setData] = useState(inital);

  const onDragEnd = (result) => console.log(result);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <ColumnList {...data} />
    </DragDropContext>
  );
}
