import { useState } from "react";
import React from "react";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
// icon
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

export default function Header() {
  const [open, setOpen] = useState(true);
  const menus = [
    { link: "aboutMe", text: "About Me" },
    { link: "pengalaman", text: "Pengalaman" },
    { link: "riwayatSekolah", text: "Riwayat Sekolah" },
    { link: "kemampuan", text: "Kemampuan & Keahlian" },
    { link: "galery", text: "Galery" },
  ];
  return (
    <div className="flex fixed top-0 right-0 left-0 justify-between items-center px-5 h-16   bg-[#11E5BB]">
      <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} offset={-70}  className="text-xl font-semibold md:text-2xl hover:cursor-pointer  " >Nugroho Dwi Aji</Link>
      <div className="text-3xl">
        <div onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? <GiHamburgerMenu /> : <IoCloseSharp />}
        </div>
        <div
          className={`lg:flex-row lg:flex lg:w-auto lg:h-0 lg:relative lg:top-0 lg:items-center h-60 bg-[#11E5BB] bg-opacity-80 rounded-xl w-40 absolute right-3 top-[70px] text-lg flex flex-col gap-4 p-2 ${
            open ? "hidden" : " "
          } `}
        >
          {menus.map((item) => (
            <ul>
              <li>
                <Link activeClass="active" to={item.link} spy={true} smooth={true} duration={500} offset={-70} className="hover:underline  hover:cursor-pointer">{item.text}</Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
