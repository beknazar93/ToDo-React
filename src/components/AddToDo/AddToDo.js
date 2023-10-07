import React from "react";
import Corzina from "../../image/corzina.png";
const AddToDo = ({
  todoName,
  setTodoName,
  todoArr,
  setTodoArr,
  status,
  setStatus,
}) => {
  const addTodoArr = (name) => {
    if (name.length !== 0) {
      setTodoArr([
        ...todoArr,
        {
          name: name,
          isActive: true,
          isComplited: false,
          isDelited: false,
          isImportant: false,
          isChange: false,
          id: Math.round(Math.random() * 1000),
        },
      ]);
    }

    setTodoName("");
  };
  const changeReset = () => {
    setStatus("reset");
    setTodoName("");
  };

  return (
    <div className="container">
      <div className="AddToDo">
        <button
          disabled={status === "completed"}
          className="AddToDo__btn"
          onClick={() => {
            addTodoArr(todoName);
          }}
        >
          +
        </button>
        <input
          value={todoName}
          className="AddToDo__input"
          placeholder={
            status === "completed" || status === "reset"
              ? "you cant add"
              : "Create a new todo..."
          }
          type="text"
          disabled={status === "completed" || status === "reset"}
          onChange={(e) => {
            setTodoName(e.target.value);
          }}
          onKeyDown={(e) => (e.code === "Enter" ? addTodoArr(todoName) : "")}
        />
        <button
          type="button"
          className={`reset-btn ${
            status === "reset" ? "reset-btn_active" : ""
          }`}
          value="reset"
          onClick={changeReset}
        >
          <img className="reset-btn_img" src={Corzina} alt="" />
          remote
        </button>
      </div>
    </div>
  );
};

export default AddToDo;
