import PlusIcon from "@/app/icon/PlusIcon";
import React from "react";

const CreateCard = () => {
  return (
    <div className="p-4 min-h-[160px] bg-[#A1A1AA3D]   max-w-[370px]  rounded-md flex flex-col items-center justify-center">
      <div className="flex items-center gap-2">
        <PlusIcon />
        <span className="text-textPrimary font-medium text-[14px] leading-[20px]">
          Create pack
        </span>
      </div>
    </div>
  );
};

export default CreateCard;
