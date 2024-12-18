import { button } from "../../types/button";

const Button = ({ style, children, icon }: button) => {
  return (
    <button className={style}>
      {icon} {children}
    </button>
  );
};

export default Button;
