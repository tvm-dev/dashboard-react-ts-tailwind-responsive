import { SIDEBAR_ITEMS } from "@/SIDEBAR_CONSTANTS";
import Image from "next/image";
import { SideBarMenuItem } from "./sidebar.menu-item";
import classNames from "classnames";

export default function Sidebar({
  toggleCollapse,
}: {
  toggleCollapse: boolean;
}) {
  const asideStyle = classNames(
    "fixed bg-[#31353d] text-gray-500 z-50 h-full shadow-lg shadow-gray-900/20 transition duration-30 ease-in-out w-[20rem]",
    {
      ["sm:w-[5.4rem] sm:left-0 left-[-100%]"]: toggleCollapse,
      ["w-[20rem]"]: !toggleCollapse,
    }
  );

  return (
    <aside className={asideStyle}>
      <div className="flex relative items-center py-5 px-3.5">
        <Image
          className="w-12 mx-3.5 min-h-fit"
          alt="logo"
          //src="/logo.png"
          src="/logo3.webp"
          width={35}
          height={35}
        ></Image>

        {!toggleCollapse && (
          <h3 className="pl-2 font-bold text-3xl text-[#e6e9ee] min-w-max">
            iControl
          </h3>
        )}
      </div>

      <nav className="flex flex-col gap-2 transition duration-300 ease-in-out ">
        <div className="flex flex-col gap-2 px-4 ">
          {SIDEBAR_ITEMS.map((item, index) => {
            return (
              <SideBarMenuItem
                key={index}
                toggleCollapse={toggleCollapse}
                item={item}
              ></SideBarMenuItem>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
