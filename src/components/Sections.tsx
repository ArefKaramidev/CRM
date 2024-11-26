import { TLink } from "../types/link";

const Sections = ({ children }: TLink) => {
  return (
    <span className="text-primary-0 font-medium flex items-center gap-x-2 hover:bg-blue-200 hover:bg-opacity-10 hover:text-blue-600 h-14">
      {children}
    </span>
  );
};

export default Sections;
