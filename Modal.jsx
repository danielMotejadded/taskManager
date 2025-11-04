import Button from "./Button";
import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, ref }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md flex-col"
    >
      {children}
      <form method="dialog" className="text-right">
        <Button
          text="Okay"
          customClass="bg-stone-700 py-1.5 px-4 rounded-md text-stone-400 hover:text-stone-100 hover:bg-stone-600"
        ></Button>
      </form>
    </dialog>,
    document.querySelector("#modal-root")
  );
}
