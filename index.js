import Task from "../components/Task";
import AddTask from "../components/AddTask";
import { useState } from "react";
import ActionButtons from "../components/ActionButtons";
import Button from "../components/Button";

const Home = () => {
  const [task, setTask] = useState("");
  const [bugd, setBugd] = useState([]);
  const [whichButtonClicked, setWhichButtonClicked] = useState("");

  const clearCompletedHandler = () => {
    setBugd(bugd.filter((el) => !el.taskChecked));
  };

  // filteredTasks logic for cleaner display
  const filteredTasks =
    whichButtonClicked === "Active"
      ? bugd.filter((el) => !el.taskChecked)
      : whichButtonClicked === "All"
      ? bugd
      : bugd;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          justifyContent: "center",
          border: "0.2px solid black",
          padding: "16px",
          borderRadius: "20px",
        }}
      >
        <p style={{ textAlign: "center" }}>todo list</p>

        <AddTask task={task} setTask={setTask} setBugd={setBugd} />

        <div style={{ height: "25px" }}>
          <ActionButtons setWhichButtonClicked={setWhichButtonClicked} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {filteredTasks.map((el, index) => (
            <Task
              key={index}
              taskName={el.taskName}
              taskChecked={el.taskChecked}
              setBugd={setBugd}
              id={el.id}
            />
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>
            {bugd.filter((el) => el.taskChecked).length} of {bugd.length} tasks
            completed
          </p>

          {/* FIXED: Use your custom Button component here */}
          <Button text="Clear Completed" onClick={clearCompletedHandler} />
        </div>
      </div>
    </div>
  );
};

export default Home;
