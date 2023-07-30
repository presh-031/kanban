import "./NewColumn.css";
const NewColumn = () => {
  return (
    <div className="hover:text-main-purple text-medium-grey transition-all duration-300 cursor-pointer new-column w-[28rem] rounded-[.6rem] min-h-full grid place-items-center mt-[6.3rem]">
      <p className="text-[2.4rem] font-bold leading-normal ">+ New Column</p>
    </div>
  );
};

export default NewColumn;
