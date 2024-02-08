import { MdOutlineDelete } from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
// import PropTypes from 'prop-types';
import { deleteTodo } from "../store/slices/TodoSlice"


const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const deletetodo = (index) => {
    dispatch(deleteTodo(index));
  };


  return (
    <div className='w-full flex flex-col gap-2'> 
      {!todos || todos.length === 0 ? (
        <h2 className='text-blue-300 text-xl font-bold'>No Todos to Show</h2>
      ) : (
        todos.map((todo, index) => {
          return (
            <div key={index} className='w-full bg-blue-50  p-3 grid grid-cols-3   justify-items-end items-center shadow rounded-full  '>
              <h4 className='text-blue-700 text-lg font-bold overflow-hidden text-clip' >{todo.title}</h4>
              <p className='text-blue-500 text-balance font-semibold overflow-hidden text-clip'>{todo.desc}</p>
              <MdOutlineDelete className='text-red-500  font-bold text-lg w-5 h-5 cursor-pointer btn'  onClick={()=>deletetodo(index)}/>
            </div>
          );
        })
      )}
    </div>
  )
}

// Todos.propTypes = {
//     todos: PropTypes.arrayOf(
//       PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         desc: PropTypes.string.isRequired,
//       })
//     ),
//   };

export default Todos