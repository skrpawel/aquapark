import BaseComponent from "./BaseComponent";
import PriceBlock from "./PriceBlock";
import { AiOutlineIdcard, AiOutlineCar } from "react-icons/ai";
import { TbDiscount2, TbSpeedboat } from "react-icons/tb";
import { CiCreditCard1 } from "react-icons/ci";
import { MdHotTub, MdPool } from "react-icons/md";
import { CgGym } from "react-icons/cg";

const Blocks: { name: string; size: number }[] = [
  {
    name: "tom",
    size: 90,
  },
];

const size = 90;

const Prices = () => {
  return (
    <BaseComponent
      className=""
      style="flex flex-col lg:h-full lg:max-h-screen px-12 justify-center items-center gap-6"
      color=""
    >
      <h2 className="text-4xl md:text-5xl font-bold">Cennik</h2>
      <div className="flex flex-wrap justify-center items-start gap-6 my-10 mb-28 sm:mb-4">
        <PriceBlock content="Karnety">
          <AiOutlineIdcard size={size} />
        </PriceBlock>
        <PriceBlock content="Baseny">
          <MdPool size={size} />
        </PriceBlock>
        <PriceBlock content="Sauny">
          <MdHotTub size={size} />
        </PriceBlock>
        <PriceBlock content="Wypożyczalnia skuterów">
          <TbSpeedboat size={size} />
        </PriceBlock>
        <PriceBlock content="Siłownia">
          <CgGym size={size} />
        </PriceBlock>
        <PriceBlock content="Parking">
          <AiOutlineCar size={size} />
        </PriceBlock>
        <PriceBlock content="Promocja studencka">
          <TbDiscount2 size={size} />
        </PriceBlock>
        <PriceBlock content="Promocja dla seniorów">
          <TbDiscount2 size={size} />
        </PriceBlock>
        <PriceBlock content="Multisport i Medicover Sport">
          <CiCreditCard1 size={size} />
        </PriceBlock>
      </div>
    </BaseComponent>
  );
};

export default Prices;
