export default function Button({ text, customClass, onAdd }) {
  return (
    <>
      <button onClick={onAdd} className={customClass}>
        {text}
      </button>
    </>
  );
}
