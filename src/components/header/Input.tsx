import { InputT } from "../../types/input";

const Input = ({
  type,
  placeHolder,
  icon,
  inputStyle,
  parentStyle,
}: InputT) => {
  return (
    <div className={`${parentStyle} flex items-center rounded-md px-2`}>
      {icon}
      <input type={type} className={inputStyle} placeholder={placeHolder} />
    </div>
  );
};

export default Input;
