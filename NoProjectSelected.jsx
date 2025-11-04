import projectImg from "../assets/logo.png";
import Button from "./Button";

export default function NoProjectSelected({ onAddNewProject }) {
  return (
    <div className=" p-24 w-2/3 text-center mx-auto ">
      <img
        src={projectImg}
        className="w-16 h-16 mx-auto mb-4"
        alt="no-project-plate"
      />
      <h1 className="font-bold text-xl text-stone-500 mb-4">
        No Project Selected
      </h1>
      <p className="text-stone-400 mb-8">
        Select a project or get started with a new one
      </p>
      <Button
        onAdd={onAddNewProject}
        customClass="bg-stone-700 text-stone-400 py-2 px-3 rounded-md hover:text-stone-50 hover:bg-stone-600"
        text="Create new project"
      />
    </div>
  );
}
