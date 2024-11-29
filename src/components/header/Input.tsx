import { InputT } from "../../types/input";

const Input = ({ type, placeHolder, icon, style }: InputT) => {
  return (
    <div className="flex items-center bg-gray-100 rounded-md px-2">
      {icon} <input type={type} className={style} placeholder={placeHolder} />
    </div>
  );
};

export default Input;
