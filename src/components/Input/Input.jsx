const Input = ({ name, placeholder, labelData, type }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className=" font-normal text-sm text-li-txt-secondary">
        {labelData}
      </label>
      <input
        className="bg-li-bg-tertiary text-li-bg-secondary rounded-md px-3 py-2 outline-none font-normal"
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
