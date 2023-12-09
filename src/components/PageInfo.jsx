const PageInfo = ({ title, text }) => {
  return (
    <div className="flex flex-col gap-4 pb-[30px] pt-[50px] border-b  lg:flex-row lg:justify-between md:items-center">
      <h1 className="title">{title}</h1>
      <p className="text-dark-300 max-w-[600px] xl:max-w-[650px] xl:text-[17px]">
        {text}
      </p>
    </div>
  );
};

export default PageInfo;
