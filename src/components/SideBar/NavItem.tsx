import React from "react";
import { Link } from "react-router-dom";
type Props = {
  to: string;
  children: React.ReactNode;
};

const NavItem: React.FC<Props> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <span className="flex-1 ml-3 whitespace-nowrap">{children}</span>
    </Link>
  );
};

export default NavItem;
