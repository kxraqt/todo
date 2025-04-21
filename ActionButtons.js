import { useState } from "react";
import Button from "./Button"; // fixed the import

export const ActionButtons = ({ setWhichButtonClicked }) => {
  const [aliButtonDaragdsanbe, setAliButtonDaragdsanbe] = useState("All");
  const buttons = ["All", "Active", "Completed"];

  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
      }}
    >
      {buttons.map((text, index) => {
        const ugAvdagFunction = () => {
          setAliButtonDaragdsanbe(text);
          setWhichButtonClicked(text);
        };
        return (
          <Button
            key={index}
            text={text}
            onClick={ugAvdagFunction}
            aliButtonDaragdsan={aliButtonDaragdsanbe}
          />
        );
      })}
    </div>
  );
};
