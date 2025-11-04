export default function Input({
  textarea,
  label,
  randomChecker,
  ref,
  ...props
}) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="uppercase font-bold text-stone-500 text-sm">
        {label}
      </label>
      {textarea ? (
        <textarea
          ref={ref}
          className={classes}
          {...props}
        />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
}
