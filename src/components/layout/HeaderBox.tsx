const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-24 lg:text-30 font-semibold text-foreground">
        {title}
        {type === "greeting" && <span>&nbsp;{user}</span>}
      </h1>
      <p className="text-14 lg:text-16 font-normal text-foreground-600">
        {subtext}
      </p>
    </div>
  );
};

export default HeaderBox;
