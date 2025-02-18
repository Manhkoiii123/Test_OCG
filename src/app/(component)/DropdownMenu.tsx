"use client";
import AssignIcon from "@/app/icon/AssignIcon";
import EllipsisHorizontalIcon from "@/app/icon/EllipsisHorizontalIcon";
import PencilIcon from "@/app/icon/Pencilicon";
import TrashIcon from "@/app/icon/TrashIcon";
import { useState, useRef, useEffect } from "react";

const menuItems = [
  { label: "Edit", icon: <PencilIcon /> },
  { label: "Assign", icon: <AssignIcon /> },
  { label: "Delete", icon: <TrashIcon /> },
];

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-md hover:bg-gray-100"
      >
        <EllipsisHorizontalIcon />
      </button>

      <div
        className={`absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-all duration-200 ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 cursor-pointer w-full px-3 py-2 text-sm text-textPrimary hover:bg-gray-100 border-l-4 border-transparent`}
          >
            {item.icon}
            <span className="mt-1">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
