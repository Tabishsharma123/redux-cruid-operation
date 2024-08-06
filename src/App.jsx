import "./App.css";
import Addtodo from "./component/addtodo";
import Counter from "./component/Counter";
import Todo from "./component/todo";

function App() {
  return (
    <>
      <div className="bg-gray-300">
        <Addtodo />
        <Todo />
        <Counter />
      </div>
    </>
  );
}

export default App;
