import { useState, useEffect } from "react";
import { Input } from "./Input";

const elements = [
  { value: "Facebook", name: "Facebook" },
  { value: "Instagram", name: "Instagram" },
  { value: "SnapChat", name: "SnapChat" },
];

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const [selectedOption, setSelectedOption] = useState("");
  const [comment, setComment] = useState("");
  const [isTextarea, setIsTextarea] = useState(false);

  useEffect(() => {
    console.log("Username: ", username);
    console.log("Password: ", password);
    console.log("Selected Option: ", selectedOption);
    console.log("Comment: ", comment);
  }, [username, password, selectedOption, comment]);

  function handleInputChange() {
    setInputType(inputType === "password" ? "text" : "password");
  }

  function handleOptionChange(e) {
    setSelectedOption(e.target.value);
  }

  function toggleTextarea() {
    setIsTextarea(!isTextarea);
  }

  function showValues(e) {
    e.preventDefault();
    alert(
      `Username: ${username}\nPassword: ${password}\nSelected Option: ${selectedOption}\nComment: ${comment}`
    );
  }

  return (
    <div id="login">
      <form onSubmit={showValues}>
        <Input
          type={"text"}
          placeholder={"Enter Username"}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          type={inputType}
          placeholder={"Enter Password"}
          name={"password"}
          value={password}
          onToggle={handleInputChange}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option>Select an option</option>
            {elements.map((element) => (
              <option key={element.value} value={element.value}>
                {element.name}
              </option>
            ))}
          </select>
        </div>
        {isTextarea ? (
          <textarea
            placeholder={"Enter Comment"}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        ) : (
          <Input
            type={"text"}
            placeholder={"Enter Comment"}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        )}
        <button className="action-button" onClick={toggleTextarea}>
          Comment
        </button>
        <button className="action-button">Sign In</button>
      </form>
    </div>
  );
};
