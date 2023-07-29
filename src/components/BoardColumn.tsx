import Card from "./Card";

const BoardColumn = () => {
  return (
    <div>
      <p className="flex gap-[1.2rem] my-[2.4rem] items-center">
        <span className="w-[1.5rem] h-[1.5rem] block rounded-full bg-[#49C4E5]"></span>
        <span className="text-[1.2rem] font-bold leading-normal tracking-[0.24rem] text-medium-grey">
          {" "}
          TODO (4)
        </span>
      </p>
      <ul className="flex flex-col gap-[2rem]">
        <Card />
        <Card />
        <Card />
        <Card />{" "}
      </ul>
    </div>
  );
};

export default BoardColumn;
