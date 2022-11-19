import { BiPhoneCall } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="h-1/4 flex flex-col justify-center bg-[#fb8500] border-t-2 border-t-[#ffb703]">
      <h2 className="text-3xl">Kontakt</h2>
      <div className="flex justify-center items-center">
        <BiPhoneCall className="w-8" />
        <h3 className="text-xl">731-980-004</h3>
      </div>
    </div>
  );
};

export default Contact;
