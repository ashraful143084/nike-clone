import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import MobileNav from "./MobileNav";
const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <header>
        {!isMobile && (
          <div className="padding-x py-8 absolute w-full z-10">
            <nav className="flex justify-between items-center max-container">
              <a href="">
                <img src={headerLogo} alt="logo" width={130} height={29} />
              </a>
              <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                  <li
                    key={item.label}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div
                className="hidden max-lg:block cursor-pointer"
                onClick={() => setIsMobile(true)}
              >
                <img src={hamburger} alt="hamburger" width={25} height={25} />
              </div>
            </nav>
          </div>
        )}
        {isMobile && <MobileNav setIsMobile={setIsMobile} />}
      </header>
    </>
  );
};

export default Nav;
