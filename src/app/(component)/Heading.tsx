const Heading = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[20px] font-semibold leading-[28px] text-textPrimary">
        {title}
      </span>
      <span className="text-[12px] font-normal leading-[16px] text-textSecondary">
        {description}
      </span>
    </div>
  );
};

export default Heading;
