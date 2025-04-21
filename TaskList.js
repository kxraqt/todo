import Task from "../components/Task";

const TaskList = ({ bugd, setBugd, filter }) => {
  const filteredTasks = bugd.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Active") return task.taskChecked === false;
    if (filter === "Completed") return task.taskChecked === true;
    return true;
  });

  return (
    <div
      style={{
        marginTop: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
      }}
    >
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          taskName={task.taskName}
          taskChecked={task.taskChecked}
          setBugd={setBugd}
        />
      ))}
    </div>
  );
};

export default TaskList;
