import { useRef } from "react";
import Task from "./Task";
export default function Summary({
  task,
  onAdd,
  state,
  deleteTask,
  deleteProject,
}) {
  const input = useRef();

  let inputValue;

  function handleInput() {
    inputValue = input.current.value;
    if (inputValue.trim() === "") {
      return;
    }
    onAdd(inputValue);
    input.current.value = null;
  }

  const formattedDate = new Date(task.dueDate).toLocaleDateString("pl-PL", {
    year: "2-digit",
    month: "short",
    day: "numeric",
  });

  const specificTasksArray = state.tasks.filter(
    (el) => state.selectedProjectId === el.projectId
  );

  return (
    <div className="w-[35rem] mt-16 mx-auto">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold mb-2">{task.title}</h1>
        <button onClick={() => deleteProject(state.selectedProjectId)}>
          Delete
        </button>
      </div>
      <div className="border-b border-black mb-4">
        <p className="mb-4">{formattedDate}</p>
        <p className="whitespace-pre mb-4">{task.description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Tasks</h2>

        <input
          ref={input}
          type="text"
          className="w-60 bg-stone-200 mr-4 focus:outline-none border-b-2 focus:border-stone-600 p-1"
        />
        <button
          onClick={handleInput}
          className="text-stone-600 hover:text-stone-900"
        >
          Add Task
        </button>
      </div>
      <Task task={task} array={specificTasksArray} deleteTask={deleteTask} />
    </div>
  );
}
