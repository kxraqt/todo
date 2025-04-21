import { Button } from "../components/Button";
import { v4 as uuidv4 } from "uuid";

const AddTask = ({ task, setTask, setBugd }) => {
  const uniqid = uuidv4();

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const clickHandler = () => {
    if (task.trim() === "") return;

    setBugd((prev) => [
      ...prev,
      { taskName: task, taskChecked: false, id: uniqid },
    ]);
    setTask("");
  };

  return (
    <div style={{ display: "flex", gap: "4px" }}>
      <input
        type="text"
        placeholder="add a new task..."
        value={task}
        onChange={handleChange}
      />
      <Button text="Add" onClick={clickHandler} />
    </div>
  );
};

export default AddTask;
