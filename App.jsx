import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import Summary from "./components/Summary";
import { useState } from "react";

function App() {
  const [addProject, setAddProject] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddNewProject() {
    setAddProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
        projects: [...prevState.projects],
        tasks: [...prevState.tasks],
      };
    });
  }

  function handleSaveNewProject(object) {
    const id = Math.random();
    setAddProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [
          ...prevState.projects,
          {
            title: object.title,
            description: object.description,
            dueDate: object.dueDate,
            id: id,
          },
        ],
        tasks: [...prevState.tasks],
      };
    });
  }

  function handleSelectedProject(id) {
    setAddProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
        projects: [...prevState.projects],
        tasks: [...prevState.tasks],
      };
    });
  }

  function handleAddTask(text) {
    setAddProject((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  const selectedProject = addProject.projects.find(
    (p) => p.id === addProject.selectedProjectId
  );

  function handleDeleteTask(taskId) {
    const filteredTaskArray = addProject.tasks.filter((el) => el.id !== taskId);
    setAddProject((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects],
        tasks: [...filteredTaskArray],
      };
    });
  }

  function handleDeleteProject(projectId) {
    const filteredProjectsArray = addProject.projects.filter(
      (el) => el.id !== projectId
    );
    const filteredTaskArray = addProject.tasks.filter(
      (el) => el.projectId !== projectId
    );
    setAddProject({
      selectedProjectId: undefined,
      projects: [...filteredProjectsArray],
      tasks: [...filteredTaskArray],
    });
  }

  function handleCancel() {
    setAddProject((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  let content;

  if (addProject.selectedProjectId === null) {
    content = (
      <NewProject cancel={handleCancel} saveNewProject={handleSaveNewProject} />
    );
  } else if (addProject.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddNewProject={handleAddNewProject} />;
  } else {
    content = (
      <Summary
        state={addProject}
        onAdd={handleAddTask}
        task={selectedProject}
        deleteTask={handleDeleteTask}
        deleteProject={handleDeleteProject}
      />
    );
  }

  return (
    <main className="flex h-screen my-8 gap-8">
      <ProjectSidebar
        project={addProject}
        onAddNewProject={handleAddNewProject}
        onSelect={handleSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
