import Button from "../components/Button";

export const Task = (props) => {
  const checkboxClick = () => {
    props.setBugd((prev) => {
      return prev.map((el) => {
        if (el.id === props.id) {
          return { ...el, taskChecked: !el.taskChecked };
        } else {
          return el;
        }
      });
    });
  };

  const deleteHandler = () => {
    props.setBugd((prev) => prev.filter((el) => el.id !== props.id));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "LightGray",
        padding: "8px",
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "4px",
          alignItems: "center",
        }}
      >
        <input
          type="checkbox"
          checked={props.taskChecked}
          onChange={checkboxClick}
        />
        <p style={{ fontSize: "12px" }}>{props.taskName}</p>
      </div>
      <Button text="Delete" onClick={deleteHandler} />
    </div>
  );
};
