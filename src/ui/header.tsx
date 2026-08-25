import mainLogo from "@/assets/images/main_page/full-horizontal.svg";
import { Bell, LogIn, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className={`sticky top-0 z-10 bg-white dark:bg-darkBg shadow-sm shadow-black/50`}>
      <div className={`flex justify-between items-center ps-4 pe-2 py-3`}>
        <div className={`flex items-center gap-5`}>
          <Link href={`#`} className={``}>
            <Image
              src={mainLogo}
              alt={`دیجی‌کالا`}
              className={`w-48.75 h-auto`}
              loading={`eager`}
            />
          </Link>
          <div className={`h-11 px-4 flex items-center gap-2 text-xs bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 rounded-full`}>
            <span>
              <Search/>
            </span>
            <input type="text" placeholder={`جستجو`}  className={`w-109 p-2 outline-none`}/>
          </div>
        </div>
        <div className={`flex justify-end items-center gap-3`}>
          <span className={`p-2`}><Bell size={24}/></span>
          <Link href={`/login`} className={`flex items-center gap-2 border rounded-lg py-2 px-4 text-xs border-neutral-300 font-bold`}>
            <LogIn size={22} className={`-scale-100`}/>
            <span>ورود | ثبت‌نام</span>
          </Link>
        </div>
      </div>
      {children}
    </header>
  );
};

export default Header;
