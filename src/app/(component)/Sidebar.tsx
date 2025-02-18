"use client";
import BellIcon from "@/app/icon/BellIcon";
import BoardIcon from "@/app/icon/BoardIcon";
import ChevronDownIcon from "@/app/icon/ChevronDownIcon";
import ChevronRightIcon from "@/app/icon/ChevronRightIcon";
import EllipsisVerticalIcon from "@/app/icon/EllipsisVerticalIcon";
import GlassIcon from "@/app/icon/GlassIcon";
import HelpIcon from "@/app/icon/HelpIcon";
import HomeIcon from "@/app/icon/HomeIcon";
import SettingIcon from "@/app/icon/SettingIcon";
import TabsIcon from "@/app/icon/TabsIcon";
import TaskIcon from "@/app/icon/TaskIcon";
import Image from "next/image";
import React, { useState } from "react";

const sidebarItems = [
  { icon: <GlassIcon />, label: "Search" },
  { icon: <HomeIcon />, label: "Home" },
  { icon: <TaskIcon />, label: "Tasks" },
  { icon: <BoardIcon />, label: "Boards" },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`h-screen border-r border-gray-200 p-4 bg-gray-100 flex flex-col justify-between transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-[70px]" : "w-[232px]"
      }`}
    >
      <div>
        <div className="flex items-center justify-between pl-2">
          <div className="flex gap-2">
            <Image
              src="/logo.svg"
              alt="Next.js logo"
              width={20}
              height={20}
              priority
            />
            {!isCollapsed && (
              <>
                <span className="text-[14px] leading-[20px] font-medium text-textPrimary ">
                  LeanBase
                </span>
                <ChevronDownIcon />
              </>
            )}
          </div>
          <button
            onClick={toggleSidebar}
            className={`${isCollapsed && "pr-4"}`}
          >
            <TabsIcon />
          </button>
        </div>
        <div className="flex flex-col gap-2 pt-4">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 cursor-pointer py-2 hover:bg-white pl-2 rounded-lg"
            >
              {item.icon}
              {!isCollapsed && (
                <span className="text-[14px] leading-[20px] font-medium text-textPrimary">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-2 cursor-pointer py-2 bg-white px-2 rounded-lg mt-2">
          <div className="flex gap-1">
            <SettingIcon />
            {!isCollapsed && (
              <span className="text-[14px] leading-[20px] font-medium text-textPrimary">
                Workspace settings
              </span>
            )}
          </div>
          <ChevronRightIcon />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2 pt-4">
          <>
            <div className="flex items-center gap-2 cursor-pointer py-2 hover:bg-white pl-2 rounded-lg">
              <HelpIcon />
              {!isCollapsed && (
                <span className="text-[14px] leading-[20px] font-medium text-textPrimary">
                  Help & Support
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 cursor-pointer py-2 hover:bg-white pl-2 rounded-lg">
              <BellIcon />
              {!isCollapsed && (
                <span className="text-[14px] leading-[20px] font-medium text-textPrimary">
                  Notifications
                </span>
              )}
            </div>
          </>
        </div>
        <div className="flex items-center justify-between pl-2 mt-3">
          <div className="flex gap-2">
            <Image
              src={"/logo.svg"}
              alt="Next.js logo"
              width={20}
              height={20}
              priority
              className="rounded-full"
            />
            {!isCollapsed && (
              <span className="text-[14px] leading-[20px] font-medium text-textPrimary">
                Nam Pham
              </span>
            )}
          </div>
          {!isCollapsed && <EllipsisVerticalIcon />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
