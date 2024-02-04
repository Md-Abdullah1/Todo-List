import { useState, useEffect } from "react";
import Todos from "./Todos";
import { useDispatch, } from "react-redux";
import { addTodo } from "../store/slices/TodoSlice";

const TodoInput = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // const [data, setData] = useState([]);
  const dispatch = useDispatch()
 

  const HandleSubmit = (e) => {
    e.preventDefault();
    // setData((prevData) => [...prevData, { title, desc }]);
    if(title  && desc){
      dispatch(addTodo({ title, desc }));
      setTitle("");
      setDesc("");
    }
    else{
      alert("Please fill all the fields");
    }
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const parseTodos = JSON.parse(storedTodos)
      parseTodos.forEach(todo => {
        dispatch(addTodo(todo));
      });
    }
  }, [dispatch]);
  return (
    <div className=" w-full sm:w-fit p-2  h-full    flex flex-col justify-center items-center gap-2 ">
      <form
        onSubmit={HandleSubmit}
        className=" flex flex-col justify-center items-center "
      >
        <h1 className="text-blue-300 text-2xl font-bold">
          Enter your Todos here
        </h1>
        <div className="p-2  gap-2 flex flex-col justify-center items-center sm:flex-row">
          <input
            type="text"
            value={title}
            placeholder="Enter Todo title"
            onChange={(e) => setTitle(e.target.value)}
            className="p-1 shadow rounded-full px-2 border outline-blue-300 placeholder:text-blue-300"
          />
          <input
            type="text"
            value={desc}
            placeholder="Enter Todo description"
            onChange={(e) => setDesc(e.target.value)}
            className="p-1 shadow rounded-full px-2 border outline-blue-300
             placeholder:text-blue-300 "
          />
          <button type="submit" className="btn  text-blue-700 font-bold p-2 rounded-full   border-2 border-blue-700 active:bg-blue-700 active:text-blue-200 w-fit">Submit</button>
        </div> 
        
        
      </form>
        <hr className="text-black bg-black border-2 w-full"/>
      
    
      <Todos  />
    </div>
  );
};

export default TodoInput;
