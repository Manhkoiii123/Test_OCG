"use client";
import CogIcon from "@/app/icon/CogIcon";
import SettingPack from "@/app/icon/SettingPack";
import { useState } from "react";

const options = [
  { label: "General", icon: <CogIcon /> },
  { label: "Settings Packs", icon: <SettingPack /> },
];

export default function Tabs() {
  const [selected, setSelected] = useState(options[1]);

  return (
    <div className="relative  flex items-center">
      <div className="flex gap-4 border-b flex-1 border-gray-200">
        {options.map((option) => (
          <div
            key={option.label}
            onClick={() => setSelected(option)}
            className={`relative flex items-center gap-2 px-3 py-4 text-gray-700 transition-all cursor-pointer ${
              selected.label === option.label && "text-black font-semibold"
            }`}
          >
            {option.icon}
            {option.label}
            <div
              className={`absolute bottom-0 left-0 h-[2px] bg-green-400 w-full transition-transform duration-300 ease-in-out ${
                selected.label === option.label ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
