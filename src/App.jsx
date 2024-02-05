import TodoInput from "./components/TodoInput"
// import Todos from "./components/Todos"


const App = () => {
  return (
    <div className="container w-full min-h-full max-w-[100vw]  flex justify-center items-start p-4">
      <TodoInput/>
      {/* <Todos/> */}
    </div>
  )
}

export default App