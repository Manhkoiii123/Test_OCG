const Chip = ({
  number,
  icon,
  colorText,
}: {
  number: number;
  icon: React.ReactNode;
  colorText: string;
}) => {
  return (
    <div
      style={{
        backgroundColor: `${colorText}20`,
      }}
      className="flex gap-2 py-1 items-center justify-center font-medium text-[12px] leading-[16px] w-fit px-1 rounded-md"
    >
      {icon}
      <span style={{ color: colorText }}>{number}</span>
    </div>
  );
};

export default Chip;
