"use client";
import type { MegaMenuType } from "@/lib/types";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  Smartphone,
  PencilRuler,
  Laptop,
  MonitorSmartphone,
  Armchair,
  Microwave,
  HeartPlus,
  Shirt,
  Gem,
  CarFront,
  PillBottle,
  Wrench,
  Tent,
  CreditCard,
  Store,
  Baby,
  Leaf,
  Dog,
} from "lucide-react";
import { ChevronLeft } from "lucide-react";

const MegaMenu = ({ menuData }: { menuData: MegaMenuType }) => {
  const [category, setCategory] = useState(menuData[0]);
  const timeoutRef = useRef<null | NodeJS.Timeout>(null);
  const iconMap = {
    Smartphone,
    PencilRuler,
    Laptop,
    MonitorSmartphone,
    Armchair,
    Microwave,
    HeartPlus,
    Shirt,
    Gem,
    CarFront,
    PillBottle,
    Wrench,
    Tent,
    CreditCard,
    Store,
    Baby,
    Leaf,
    Dog,
  };
  return (
    
      <div
        className={`absolute top-9 z-20 flex h-[65vh] ml-4 overflow-hidden bg-white dark:bg-darkBg rounded-b-lg shadow-md shadow-black/75`}
      >

{/* Right Side... */}
        <div
          className={`overflow-auto border-l border-l-neutral-100 dark:border-l-neutral-900 bg-[#f5f5f5] dark:bg-[#0a0a0a]`}
          dir={`ltr`}
        >
          <ul
            className={`text-xs text-[#3f4064] dark:text-[#c0bfab] font-bold leading-6.5`}
            dir={`rtl`}
          >
            {menuData.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <li
                  key={index}
                  onMouseEnter={() => {
                    // Clear any previous timeout first
                    clearTimeout(timeoutRef.current!);
                    
                    // Set new timeout for this item
                    timeoutRef.current = setTimeout(() => {
                      setCategory(item);
                    }, 300);
                  }}
                  onMouseLeave={() => {
                    // Cancel the timeout - NOTHING happens
                    clearTimeout(timeoutRef.current!);
                  }}
                  className={`${item === category && "bg-white text-primary dark:bg-black"} text-nowrap`}
                >
                  <Link
                    href={`#`}
                    className={`flex flex-row items-center gap-2 py-3 pr-2 pl-10.5`}
                  >
                    <Icon size={18} />
                    <p>{item.title}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
{/* ...Right Side */}

{/* Left Side... */}
        <div className={`px-5 pt-5 overflow-auto flex flex-col gap-10`} dir={`ltr`}>
            <Link 
              href={`#`} 
              dir={`rtl`} 
              className={`text-xs text-blue-600 dark:text-blue-400 flex items-center gap-1`}
            >
              <p>{category.allProducts.title}</p>
              <ChevronLeft size={12} strokeWidth={3}/>
            </Link>
            <div dir={`rtl`} className={`flex gap-10`}>
              {category.columns.map((col, index) => (
                <div key={index} className={`flex flex-col gap-5 flex-1`}>
                  {col.map((group, index) => (
                    <div key={index} className={`flex flex-col gap-3`}>
                      <Link href={`#`} className={`hover:text-primary`}>
                        <h2 className={`border-r-2 ps-2 border-primary text-sm font-bold flex items-center gap-1`}>
                          <p>{group.title}</p>
                          <ChevronLeft size={12} strokeWidth={3}/>
                        </h2>
                      </Link>
                      <ul className={`flex flex-col`}>
                        {group.items.map((item, index) => (
                          <li key={index} className={`text-xs hover:text-primary text-neutral-500 dark:text-neutral-400 flex items-center`}>
                            <Link href={`#`} className={`py-2`}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
        </div>
{/* ...Left Side */}
      </div>
  );
};

export default MegaMenu;
