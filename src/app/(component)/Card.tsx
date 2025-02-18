import Chip from "@/app/(component)/Chip";
import DropdownMenu from "@/app/(component)/DropdownMenu";
import Heading from "@/app/(component)/Heading";
import CheckBlueIcon from "@/app/icon/CheckBlueIcon";
import FlashIcon from "@/app/icon/FlashIcon";
import StatusIcon from "@/app/icon/StatusIcon";
import TagIcon from "@/app/icon/TagIcon";

const Card = ({ board }: { board: string[] }) => {
  return (
    <div className="p-4 min-h-[160px] border border-[#A1A1AA3D] max-w-[370px]  rounded-md flex flex-col justify-between">
      <div>
        <Heading
          title="Approval & Feedback demo"
          description="Use this pack for product development process."
        />
        <div className="flex gap-2 my-4">
          <Chip number={4} icon={<CheckBlueIcon />} colorText="#3B82F6" />
          <Chip number={8} icon={<StatusIcon />} colorText="#EAB308" />
          <Chip number={12} icon={<TagIcon />} colorText="#00C16A" />
          <Chip number={16} icon={<FlashIcon />} colorText="#F97316" />
        </div>
      </div>
      <div className="w-full">
        <div className={`h-[1px] bg-[#A1A1AA3D] w-full mb-4 `} />
        <div className="flex items-center justify-between">
          <div
            className={`text-textSecondary relative font-medium text-[12px] leading-[16px] ${
              board.length > 2 ? "cursor-pointer " : ""
            } `}
          >
            <div className="group">
              Assign to board:{" "}
              {board.length > 2
                ? board.slice(0, 2).join(", ") +
                  "..." +
                  `(+${board.length - 2})`
                : board.join(", ")}
              {board.length > 2 && (
                <>
                  <div
                    className={`
                      absolute border-gray-200 left-1/2 top-full z-20 mt-3 -translate-x-1/2 border whitespace-nowrap rounded-lg shadow-lg bg-white px-4 py-[6px] font-medium text-[12px] leading-[16px] text-textPrimary opacity-0 group-hover:opacity-100
                    `}
                  >
                    <div className="w-0 h-0  absolute left-1/2 -translate-x-1/2 top-[-12px] -z-10 border-l-[16px] border-l-transparent border-b-[12px] border-b-gray-200 border-r-[16px] border-r-transparent"></div>
                    {board.join(", ")}
                  </div>
                </>
              )}
            </div>
          </div>

          <DropdownMenu />
        </div>
      </div>
    </div>
  );
};

export default Card;
