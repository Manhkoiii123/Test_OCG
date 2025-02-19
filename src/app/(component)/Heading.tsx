const Heading = ({
  title,
  description,
  small = false,
}: {
  title: string;
  description: string;
  small?: boolean;
}) => {
  return (
    <div className={`flex flex-col  ${small ? "" : "gap-2"}`}>
      <span
        className={` font-semibold leading-[28px] text-textPrimary ${
          small ? "text-[14px]" : "text-[20px]"
        }`}
      >
        {title}
      </span>
      <span className="text-[12px] font-normal leading-[16px] text-textSecondary">
        {description}
      </span>
    </div>
  );
};

export default Heading;
