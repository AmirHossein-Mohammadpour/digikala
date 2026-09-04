'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import kasbokar from "@/assets/images/main_page/footer/namad/kasbokar.webp";
import logo from "@/assets/images/main_page/footer/namad/logo.png";
import rezi from "@/assets/images/main_page/footer/namad/rezi.webp";
import sapra from "@/assets/images/main_page/footer/namad/sapra.webp";
import WhatIsDigiKala from "./whatIsDigiKala";
import { ChevronLeft } from "lucide-react";

const AboutDigiKala = () => {
  const [showFullText, setShowFullText] = useState(false);
  const namads = [sapra, rezi, kasbokar, logo];

  return (
    <div className={`border-y py-8 flex justify-between items-start gap-12 border-neutral-100`}>
      <div className={`flex flex-col gap-2`}>
        <div className={`relative flex flex-col gap-2 ${showFullText && 'after:hidden'} after:absolute after:w-full after:h-full after:bg-linear-to-b after:from-transparent after:from-50% after:to-white dark:after:to-darkBg after:to-100%`}>
          <WhatIsDigiKala className={`${showFullText? '':'h-31.25 overflow-hidden'}`}/>
        </div>
        <button onClick={() => {setShowFullText(prev => !prev)}} className={`flex items-center text-xs text-blue-500`}>
          {showFullText? 'بستن':'مشاهده بیشتر'}
          <ChevronLeft size={18}/>
        </button>
      </div>
      <div className={`hidden shrink-0 lg:flex justify-center items-center gap-2`}>
        {namads.map((namad, index) => (
          <Link
            key={index}
            href={`#`}
            className={`border p-4 rounded-lg bg-white border-neutral-200`}
          >
            <Image
              src={namad}
              alt={`مجوز`}
              className={`w-18.75 aspect-square object-contain`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AboutDigiKala;
