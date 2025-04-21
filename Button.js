const Button = (props) => {
  const { text, onClick, aliButtonDaragdsan } = props;

  return (
    <button
      style={{
        height: "100%",
        border: "none",
        borderRadius: "6px",
        padding: "6px 12px",
        backgroundColor:
          text === aliButtonDaragdsan || text === "Add" ? "#3c82f6" : "#f3f4f6",
        color: text === aliButtonDaragdsan || text === "Add" ? "#fff" : "#000",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
