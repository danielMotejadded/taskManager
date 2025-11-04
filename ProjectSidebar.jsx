import Button from "./Button";

export default function ProjectSidebar({ onAddNewProject, project, onSelect }) {
  return (
    <aside className="py-16 px-8 bg-stone-900 w-1/3 rounded-r-xl text-stone-50 md:w-72">
      <h2 className="mb-8 text-xl font-bold uppercase text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button
          onAdd={onAddNewProject}
          customClass="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 mb-8"
          text="+ Add Project"
        />
      </div>
      <ul className="flex flex-col gap-2">
        {project.projects.map((p) => (
          <li key={p.id}>
            <button
              onClick={() => onSelect(p.id)}
              className="mx-1 text-left p-1 text-stone-400"
            >
              {p.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
