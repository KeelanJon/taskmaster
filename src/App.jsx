import { useState, useEffect } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import CoinCounter from "./components/CoinCounter/CoinCounter"
import "./App.css"

function App() {
  const [input, setInput] = useState("")

  const [tasks, setTasks] = useState(function () {
    console.log("Getting stored tasks.")
    const savedTasks = localStorage.getItem("tasks")
    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  // Study notes.
  // When dealing with a variable controlled by multiple components,
  // move the variable to the nearest common parent so both can access.
  const [coins, setCoins] = useState(function () {
    const savedCoins = localStorage.getItem("coins")
    return savedCoins ? parseInt(savedCoins) : 0
  })

  useEffect(() => {
    console.log("coin save?")
    localStorage.setItem("coins", coins.toString())
  }, [coins])

  function addTask() {
    if (input == "") {
      //Do nothing, no task entered!
    } else {
      setTasks([...tasks, input])
      setInput("")
    }
  }

  function completeTask(indexToDelete) {
    //Complete task provides a coin for completion.
    //Delete task just removes the task without adding a coin

    let newTaskList = tasks.filter(function (item, index) {
      if (index !== indexToDelete) {
        return true
      } else {
      }
    })

    setCoins(coins + 1)

    setTasks(newTaskList)
  }

  function deleteTask(indexToDelete) {
    let newTaskList = tasks.filter(function (item, index) {
      if (index !== indexToDelete) {
        return true
      } else {
      }
    })

    setTasks(newTaskList)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Taskmaster</h1>

      <CoinCounter coins={coins} setCoins={setCoins} />

      <div className="task-list">
        {tasks.map(function (task, index) {
          return (
            <div
              key={index}
              className="list-item"
              onClick={function () {
                completeTask(index)
              }}
            >
              {task}
            </div>
          )
        })}
      </div>

      <form
        className="input"
        onSubmit={function (e) {
          e.preventDefault()
          addTask()
        }}
      >
        <input
          className="task-input"
          type="text"
          required
          placeholder="Enter a task"
          onChange={function (e) {
            setInput(e.target.value)
          }}
          value={input}
        />
        <input type="submit" value="Add Task" />
        {/* <button onClick={addTask} id="add-task-btn">
          Add Task
        </button> */}
      </form>

      <p className="read-the-docs">
        Created by{" "}
        <a href="https://keelanjon.com" target="_blank">
          KeelanJon
        </a>
      </p>
    </>
  )
}

export default App
