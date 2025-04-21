import { useState } from "react";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import ActionButtons from "../components/ActionButtons";

function App() {
  const [task, setTask] = useState("");
  const [bugd, setBugd] = useState([]);
  const [whichButtonClicked, setWhichButtonClicked] = useState("All");

  return (
    <div style={{ padding: "32px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>My Todo App</h1>
      <AddTask task={task} setTask={setTask} setBugd={setBugd} />
      <ActionButtons setWhichButtonClicked={setWhichButtonClicked} />
      <TaskList bugd={bugd} setBugd={setBugd} filter={whichButtonClicked} />
    </div>
  );
}

export default App;
