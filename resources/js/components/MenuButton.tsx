import React from "react";
import { AlignJustify, X } from "lucide-react";

type MenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
      aria-label="Toggle Menu"
    >
      {isOpen ? <X size={25} /> : <AlignJustify size={25} />}
    </button>
    
  );
};

export default MenuButton;
