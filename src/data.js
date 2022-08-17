const data = {
  tasks: {
    "task-1": { id: "task-1", content: "Play Minecraft" },
    "task-2": { id: "task-2", content: "Wash Dishes" },
    "task-3": { id: "task-3", content: "Eat Apples" },
    "task-4": { id: "task-4", content: "Learn React" },
    "task-5": { id: "task-5", content: "Have Fun" }
  },

  columns: {
    "column-1": {
      id: "column-1",
      content: "To Do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    }
  },

  columnOrder: [`column-1`]
};

export default data;
