import React,{useEffect, useState, useRef} from 'react'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.clouds.min'
import Header from "./components/Header/Header";
import './App.css'
import AddToDo from "./components/AddToDo/AddToDo";
import TodoList from './components/TodoList/TodoList'

function App() {

  const[todoName,setTodoName]=useState('');
  const[todoArr,setTodoArr]=useState([]);
  const[status,setStatus]=useState('all');
  const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                THREE: THREE,
                maxDistance: 22.00,
                points: 20.00,
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect]);
  


  return (
    <>
    <div className="vanta" ref={myRef}></div>
    <div className="content">
   
         <Header/>
        <AddToDo todoName={todoName} setTodoName={setTodoName} status={status} setStatus={setStatus} todoArr={todoArr} setTodoArr={setTodoArr}/>
        <TodoList todoName={todoName} setTodoName={setTodoName} todoArr={todoArr} setTodoArr={setTodoArr} status={status} setStatus={setStatus} />
   
   
    </div>
    
       
     
      
    </>
    
       
  );
}

export default App;
