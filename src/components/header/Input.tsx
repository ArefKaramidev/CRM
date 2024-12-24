import { InputT } from "../../types/input";

const Input = ({
  name,
  type,
  placeHolder,
  icon,
  inputStyle,
  parentStyle,
  value,
  requiredInput,
  onChange,
}: InputT) => {
  return (
    <div className={`${parentStyle} flex items-center rounded-md px-2`}>
      {icon}
      <input
        type={type}
        className={inputStyle}
        placeholder={placeHolder}
        value={value}
        name={name}
        onChange={onChange}
       required={requiredInput}
      />
    </div>
  );
};

export default Input;
