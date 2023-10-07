import React from "react";

const ToDoFooter = ({todoArr,setTodoArr,status,setStatus,todoName,setTodoName}) => {

    const deliteComleted = ()=>{
        setTodoArr(todoArr.filter((item,idx)=>{
            return !item.isComplited
        }))
    }


    const chengeStatus = (e)=>{
      setStatus(e.target.value);
      setTodoName('')
    }


  return (
    <div className="TodoList__footer">
      <div className="TodoList__footer-numbers">tasks {todoArr.length} completed {todoArr.filter((item)=>item.isComplited).length} </div>
      <div className="TodoList__function">
        <button 
        className={`TodoList__footer-btn_all ${status=== 'all' ? 'TodoList__footer-btn_active': ''}`} 
        value="all" onClick={(e)=> chengeStatus(e)}>All</button>
        <button 
        className={`TodoList__footer-btn ${status=== 'active' ? 'TodoList__footer-btn_active': ''}`} 
        value="active" onClick={(e)=>chengeStatus(e)}>Active</button>
        <button 
        className={`TodoList__footer-btn ${status=== 'completed' ? 'TodoList__footer-btn_active': ''}`}
         value="completed" onClick={(e)=>chengeStatus(e)}>Completed</button>
          <button 
        className={`TodoList__footer-btn ${status=== 'important' ? 'TodoList__footer-btn_active': ''}`}
         value="important" onClick={(e)=>chengeStatus(e)}>important</button>
      </div>
      <button 
      className="TodoList__delete-completed" onClick={()=>{
        deliteComleted()
      }}>Clear Completed</button>
    </div>
  );
};

export default ToDoFooter;
