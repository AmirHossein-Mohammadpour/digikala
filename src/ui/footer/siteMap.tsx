'use client';

import { footerGroups } from "@/lib/footerGroups";
import Link from "next/link";
import { Instagram, Aparat, Bale, Linkedin, Twitter } from "@/ui/customLogos";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const SiteMap = () => {
  const socialMediaLogos = [Instagram, Twitter, Linkedin, Aparat, Bale];
  const [openStates, setOpenStates] = useState([false, false, false]);

  const toggleOpen = (index: number) => {
    setOpenStates(prev => prev.map((state, i) => i === index ? !state : state));
  };

  return (
    <>
      <div id={`Mobile-SiteMap`} className={`flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700`}>
        {footerGroups.map((group, index) => (
          <div key={index} className={`flex flex-col gap-4 py-3 text-[10.5px]`}>
            <div
              onClick={() => {toggleOpen(index)}} 
              className={`flex justify-between items-center cursor-pointer`}
            >
              <h2 className={`font-bold`}>{group.title}</h2>
              {openStates[index]? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
            </div>
            <div className={`${openStates[index]? 'flex':'hidden'} flex-col gap-3 text-[9.5px] text-neutral-500 dark:text-neutral-400`}>
              {group.items.map((item, index) => (
                <p key={index}>{item.title}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div id={`Desktop-SiteMap`} className={`hidden lg:flex justify-between`}>
        {footerGroups.map((group, index) => (
          <div key={index} className={`flex flex-col gap-5`}>
            <p className={`font-bold text-gray-700 dark:text-gray-300`}>
              {group.title}
            </p>
            <div
              className={`flex flex-col gap-2 text-sm text-gray-500 leading-7.5`}
            >
              {group.items.map((item, index) => (
                <Link key={index} href={`#`} className={`y-1.25`}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className={`hidden lg:flex flex-col gap-8`}>
          <div className={`flex flex-col gap-3`}>
            <p className={`font-bold text-gray-700 dark:text-gray-300`}>
              همراه ما باشید!
            </p>
            <div
              className={`flex justify-between items-center gap-8 text-gray-400`}
            >
              {socialMediaLogos.map((Logo, index) => (
                <Link key={index} href={`#`}>
                  <Logo size={40} />
                </Link>
              ))}
            </div>
          </div>
          <div className={`flex flex-col gap-3`}>
            <p className={`font-bold text-gray-700 dark:text-gray-300`}>
              با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
            </p>
            <div className={`flex justify-between items-center gap-2`}>
              <input
                type="text"
                placeholder={`ایمیل شما`}
                className={`flex-1 self-stretch px-4 bg-neutral-200 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 rounded-lg outline-none`}
              />
              <button
                className={`px-4 py-3 text-sm bg-primary text-white rounded-lg`}
              >
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteMap;
