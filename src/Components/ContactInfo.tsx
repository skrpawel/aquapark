import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";

const ContactInfo = () => {
  return (
    <div className="flex flex-col  w-full h-full items-start justify-between p-8 text-left">
      <h3 className="text-3xl">
        Masz jakieś pytania?
        <br />
        <a
          className="text-[#219ebc]"
          href="https://www.facebook.com/"
          target="_blank"
        >
          Skontaktuj się
        </a>
      </h3>
      <span className="text-zinc-500	">
        Obserwuj nasze media społecznościowe
      </span>
      <div className="flex justify-start w-full">
        <AiOutlineInstagram size={30} />
        <AiFillFacebook size={30} />
        <AiFillYoutube size={30} />
      </div>
    </div>
  );
};

export default ContactInfo;
