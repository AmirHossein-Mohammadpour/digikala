"use client";

import { List } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CategoryMenu = ({ children }: { children: React.ReactNode }) => {
  const [showMegaMenu, setShowMegaMenu] = useState<boolean>(false);
  const timerRef = useRef<null | NodeJS.Timeout>(null);
  useEffect(() => {
    document.body.style.overflow = (showMegaMenu ? 'hidden' : 'auto');
  }, [showMegaMenu]);

  return (
    <div
      onMouseEnter={() => {
        clearTimeout(timerRef.current!)
        timerRef.current = setTimeout(() => {
          setShowMegaMenu(true);
        }, 300)
      }}
      onMouseLeave={() => {
        clearTimeout(timerRef.current!)
        timerRef.current = setTimeout(() => {
          setShowMegaMenu(false);
        }, 300)
      }}
      className={`flex items-center gap-1`}
    >
      <List size={20} strokeWidth={3}/>
      <span className={`text-sm font-bold cursor-pointer`}>دسته‌بندی کالاها</span>
      {showMegaMenu && (
        <>
          <div
            onMouseEnter={() => {
              clearTimeout(timerRef.current!)
              timerRef.current = setTimeout(() => {
                setShowMegaMenu(false);
              }, 300)
            }}
            className={`bg-black/30 absolute inset-x-0 top-9 h-screen z-10`}
          >
          </div>
          {children}
        </>
      )}
    </div>
  );
};

export default CategoryMenu;
