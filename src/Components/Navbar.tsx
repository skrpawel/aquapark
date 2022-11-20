import { useEffect, useState } from "react";
import logo from "../assets/swimming-pool.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
  const Menu = [
    {
      id: "about",
      name: "O nas",
    },
    {
      id: "gallery",
      name: "Galeria",
    },
    {
      id: "open-hours",
      name: "Godziny otwarcia",
    },
    {
      id: "prices",
      name: "Cennik",
    },
    {
      id: "contact",
      name: "Kontakt",
    },
  ];

  const [navbar, setNavbar] = useState<boolean>();

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav
      className={
        "border-gray-200 px-2 sm:px-4 py-2.5 top-0 z-50 fixed w-full " +
        (navbar && "bg-[#219ebc] transition-all duration-500")
      }
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className=" bg-white rounded-lg p-2">
          <img src={logo} alt="Logo of company Wavy" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-[#219ebc]">
            Wavy
          </span>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center w-12 h-12 p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <img src={menu} className="" />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
            {Menu.map((el) => (
              <li>
                <a
                  href={"#" + el.id}
                  className="block py-2 pl-3 pr-4  md:p-0 hover:text-[#ffb703]"
                  aria-current="page"
                >
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
