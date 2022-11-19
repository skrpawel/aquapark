import { AiOutlineIdcard } from "react-icons/ai";

export interface Props {
  content: string;
  children: any;
}

const PriceBlock = (props: Props) => {
  return (
    <div className="w-full p-4 md:w-1/3 lg:w-1/4 bg-[#219ebc] rounded-lg flex flex-col justify-center items-center hover:cursor-pointer hover:opacity-80">
      {props.children}
      <h2>{props.content}</h2>
    </div>
  );
};

export default PriceBlock;
