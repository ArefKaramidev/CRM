import { TLink } from "../types/link";

const Sections = ({ children }: TLink) => {
  return (
    <span className="px-2 text-primary-0 font-medium flex items-center gap-x-2 hover:bg-blue-300 hover:bg-opacity-15 hover:text-blue-600 h-14 rounded-md">
      {children}
    </span>
  );
};

export default Sections;
