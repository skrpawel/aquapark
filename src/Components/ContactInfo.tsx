import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";
import Socials from "./Socials";

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
      <div className="flex justify-start w-full gap-2">
        <Socials href="https://www.instagram.com/" target="_blank">
          <AiOutlineInstagram size={30} />
        </Socials>
        <Socials href="https://www.facebook.com/" target="_blank">
          <AiFillFacebook size={30} />
        </Socials>
        <Socials
          href="https://www.youtube.com/watch?v=CWisOGq0SWs"
          target="_blank"
        >
          <AiFillYoutube size={30} />
        </Socials>
      </div>
    </div>
  );
};

export default ContactInfo;
