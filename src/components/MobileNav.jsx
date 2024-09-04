import React from "react";
import { arrowRight } from "../assets/icons";
import { navLinks } from "../constants";
const MobileNav = ({ setIsMobile }) => {
  return (
    <div className="h-screen w-[60%] absolute right-0 bg-slate-300 padding-t padding-x">
      <div className="cursor-pointer" onClick={() => setIsMobile(false)}>
        <img src={arrowRight} alt="arrow" width={40} height={40} />
      </div>
      <ul className="flex flex-col gap-5 padding-t">
        {navLinks.map((item, index) => (
          <li
            key={index}
            className="font-montserrat text-lg leading-normal cursor-pointer text-slate-gray"
          >
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
