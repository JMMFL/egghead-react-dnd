import { useState } from "react";
import Column from "./components/Column";
import inital from "./data";

export default function App() {
  const [data, setData] = useState(inital);

  return data.columnOrder.map((columnId) => {
    const column = data.columns[columnId];
    const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);
    return <Column key={column.id} column={column} tasks={tasks} />;
  });
}
