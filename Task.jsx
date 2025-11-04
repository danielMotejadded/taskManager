export default function Task({ array, deleteTask }) {
  return (
    <ul>
      {array.length > 0 ? (
        array.map((task) => (
          <li
            key={task.id}
            className="flex justify-between p-4 bg-stone-200 mt-4"
          >
            <span>{task.text} </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="hover:text-red-700"
            >
              Clear
            </button>
          </li>
        ))
      ) : (
        <p className="text-stone-500 mt-4">
          This project doesn't have tasks yet.
        </p>
      )}
    </ul>
  );
}
