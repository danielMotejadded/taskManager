import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({ saveNewProject, cancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const titleInput = title.current.value;
    const descriptionInput = description.current.value;
    const dueDateInput = dueDate.current.value;
    if (
      titleInput.trim() === "" ||
      descriptionInput.trim() === "" ||
      dueDateInput.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    const object = {
      title: titleInput,
      description: descriptionInput,
      dueDate: dueDateInput,
    };

    saveNewProject(object);
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-700 mb-4 mt-3">
          Invalid Input
        </h2>
        <p className="mb-4 text-stone-700">
          Ooops... looks like you forgot to enter a value.
        </p>
        <p className="mb-4 text-stone-700">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 mx-auto">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button
            onClick={cancel}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
          >
            Save
          </button>
        </menu>
        <div>
          <Input ref={title} type="text" label="Title" />
          <Input ref={description} textarea label="Description" />
          <Input ref={dueDate} type="date" label="Due date" />
        </div>
      </div>
    </>
  );
}
