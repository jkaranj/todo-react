import React, { useState } from "react";
import "./App.css";
// import "./indeex.css";
// import InputField from "./components/inputField";
// import CategoryType from "./components/category";

function App() {
  // const []
  const [newCategory, setNewCategory] = useState("");
  const [currentCategory, setCurrentCategory] = useState("grocery");
  // const [categories, addCategory] = useState(["grocery", "office"]);
  // const [currentCategory, setCurrentCategory] = useState(() => {
  //   console.log("karlo kaam kuch");
  // });
  // const [currentCategory, setCurrentCategory] = useState("grocery");
  const [categories, addCategory] = useState([]);
  const [newTask, setNewTask] = useState();
  const [tasks, addTasks] = useState({
    grocery: [
      // {
      //   taskName: "task1",
      //   completed: false,
      // },
      // {
      //   taskName: "task2",
      //   completed: true,
      // },
    ],
  });
  function ifCategoryPresent(categories) {
    if (categories.length > 0) {
      return (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTasks({
              ...tasks,
              [currentCategory]: [
                ...tasks[currentCategory],
                { taskName: newTask, completed: false },
              ],
            });
          }}
        >
          <input
            type="text"
            value={newTask}
            placeholder="Enter a new todo here..."
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
          ></input>
          <button type="submit" className="add">
            +
          </button>
        </form>
      );
    } else {
      return <div></div>;
    }
  }

  return (
    <div>
      <div className="mainContainer">
        {console.log(Object.keys(tasks))}
        <h1>ToDo list</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addCategory([...categories, newCategory]);
            addTasks({ ...tasks, [newCategory]: [] });
          }}
        >
          <input
            type="text"
            placeholder="Enter a new category here..."
            onChange={(e) => {
              setNewCategory(e.target.value);
            }}
            value={newCategory}
          />
          <button type="submit" className="add">
            +
          </button>
        </form>

        <h3>Categories</h3>
        {/* {console.log(categories)} */}
        <div className="categories">
          {categories.map((category) => {
            return (
              <button
                onClick={(e) => {
                  setCurrentCategory(category);
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        <h4>Tasks</h4>

        <div className="content">
          {ifCategoryPresent(categories)}

          {tasks[currentCategory].map((task) => {
            return (
              <div>
                {/* <button>O</button> */}
                <span
                  className={task.completed ? "done" : "dot"}
                  onClick={() => {
                    task.completed = !task.completed;
                    console.log(task.completed);
                  }}
                >
                  {" "}
                </span>
                <span className="taskk">{task.taskName}</span>
                <span className={task.completed ? "task-done" : "taskk"}>
                  {task.taskName}
                </span>
                {task.completed}
                <button onClick={(e) => {}} className="deltaskbutt">
                  delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
