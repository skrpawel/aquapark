import { BiPhoneCall } from "react-icons/bi";
import ContactInfo from "./ContactInfo";
import Location from "./Location";
import Newsletter from "./Newsletter";

const Contact = () => {
  return (
    <div className="h-1/5 bg-[#fb8500] flex items-start md:items-center justify-center lg:py-16">
      <div className="flex flex-col md:flex-row lg:w-1/2 h-3/4">
        <ContactInfo />
        <Location />
        <Newsletter />
      </div>
    </div>
  );
};

export default Contact;
