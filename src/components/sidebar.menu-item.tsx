"use client";

import { SideNavItem } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
export const SideBarMenuItem = ({
  item,
  toggleCollapse,
}: {
  item: SideNavItem;
  toggleCollapse: boolean;
}) => {
  const linkStyle =
    "flex items-center min-h-[40px] h-full text-[#6e768e] py-2 px-4 hover:text-white duration-200";

  const activeLinkStyle =
    "rounded-md text-white light:text-black light:bg:-[#3a3f48] ";

  const ddLinkStyle = linkStyle;

  const navMenuDropDownItem =
    "text-[#6e768e] py-2 px-4 hover:text-white transition duration-200 ";

  //hignlight submenu on active:
  const pathName = usePathname();

  //config function for toggle menu:
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  //open toggle:
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <>
      {item.submenu ? (
        <div className=" rounded-md min-w-[18px] ">
          <a
            className={` ${ddLinkStyle} ${
              pathName.includes(item.path) ? activeLinkStyle : ""
            } `}
            onClick={toggleSubMenu}
          >
            {item.icon}

            {!toggleCollapse && (
              <>
                <span className="ml-3 text-base leading-6 font-semibold ">
                  {" "}
                  {item.title}{" "}
                </span>
                {/* arrow right below*/}
                <BsChevronRight
                  className={`${
                    subMenuOpen ? "rotate-90" : ""
                  } "ml-auto stroke-2 text-xs ml-2 "`}
                />
              </>
            )}
          </a>

          {subMenuOpen && !toggleCollapse && (
            <div className="bg-[#3a3f48] border-l-4 ">
              <div className="grid gap-y-2 px-10 py-3 leading-5  ">
                {item.subMenuItems.map((subItem, indx) => {
                  return (
                    <Link
                      key={indx}
                      href={subItem.path}
                      className={` ${navMenuDropDownItem} ${
                        subItem.path === pathName ? "text-white" : ""
                      } `}
                    >
                      <span> {subItem.title} </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link
          href={item.path}
          className={` ${linkStyle} ${
            item.path === pathName ? activeLinkStyle : " "
          } `}
        >
          {item.icon}
          {!toggleCollapse && (
            <span className="ml-3 leading-6 font-semibold"> {item.title} </span>
          )}
        </Link>
      )}
    </>
  );
};
