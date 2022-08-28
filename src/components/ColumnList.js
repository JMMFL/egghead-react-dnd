import Column from "./Column";

export default function ColumnList({ tasks, columns, columnOrder }) {
  return columnOrder.map((columnId) => {
    const column = columns[columnId];
    const columnTasks = column.taskIds.map((taskId) => tasks[taskId]);
    return <Column id={column.id} tasks={columnTasks} column={column} />;
  });
}
