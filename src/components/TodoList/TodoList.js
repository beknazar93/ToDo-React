import React from "react";

import Todo from "../Todo/Todo";
import ToDoFooter from "../ToDoFooter/ToDoFooter";


const TodoList = ({todoArr,setTodoArr,status,setStatus,todoName,setTodoName}) => {




  return (
    <div className="container">
      <div className="TodoList">
        <div className="TodoList__scrol">
        {todoArr.filter((item)=> !item.isDelited).length === 0 && status === 'all' 
        ? <h3 className="TodoList__nottodo">Здесь будут ваши задание</h3>
         : todoArr.filter((item)=> item.isComplited && !item.isDelited).length === 0  && status==='completed' ? <h3 className="TodoList__nottodo">Здесь будут ваши выполненные задание</h3>
         : todoArr.filter((item)=> !item.isComplited && !item.isDelited).length === 0  && status==='active' ? <h3 className="TodoList__nottodo">Здесь будут ваши активные задание</h3>
         : todoArr.filter((item)=> item.isDelited).length === 0 && status === 'reset' ? <h3 className="TodoList__nottodo">Здесь будут ваши удаленные задание</h3>
         : todoArr.filter((item)=> item.isImportant).length === 0  && status==='important' ? <h3 className="TodoList__nottodo">Здесь будут ваши важные задание</h3>
        :
          <Todo todoArr={todoArr} setTodoArr={setTodoArr} status={status} setStatus={setStatus} /> }
        </div>
      
    
       <ToDoFooter todoName={todoName} setTodoName={setTodoName} todoArr={todoArr} setTodoArr={setTodoArr} status={status} setStatus={setStatus}/>
      </div>
    </div>
  );
};

export default TodoList;
