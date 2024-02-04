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
            <div key={index} className='w-full bg-blue-50  p-3 flex gap-2 justify-between shadow rounded-full items-center '>
              <h4 className='text-blue-700 text-lg font-bold ' >{todo.title}</h4>
              <p className='text-blue-500 text-balance font-semibold '>{todo.desc}</p>
              <MdOutlineDelete className='text-red-500 font-bold text-lg cursor-pointer btn'  onClick={()=>deletetodo(index)}/>
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