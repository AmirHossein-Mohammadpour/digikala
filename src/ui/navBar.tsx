import {ShoppingBasket, Flame, CirclePercent, Shirt, Trophy, List, MapPin, } from 'lucide-react';
import Link from 'next/link';
import MegaMenu from './megaMenu';
import { megaMenu } from '@/lib/megaMenu';
import CategoryMenu from './categoryMenu';

const Navbar = () => {
  const navs = [
    {name: 'شگفت‌انگیز‌ها', icon: CirclePercent},
    {name: 'سوپرمارکت', icon: ShoppingBasket},
    {name: 'طلا و نقره دیجیتال', icon: Trophy},
    {name: 'پرفروش‌ترین‌ها', icon: Flame},
    {name: 'دیجی‌استایل', icon: Shirt},
  ];
  return (
    <nav className={`w-full ps-4 pe-2 py-1 flex justify-between items-center bg-amber-60 relative`}>
      <div className={`flex items-center gap-5`}>
        <CategoryMenu>
          <MegaMenu menuData={megaMenu}/>
        </CategoryMenu>
        <ul className={`flex items-center gap-6 text-xs border-x px-3 text-neutral-600 dark:text-neutral-300 border-neutral-400`}>
          {navs.map((item, index) => (
            <li 
              key={index}
              className={
                `relative 
                after:absolute after:-bottom-2 after:inset-x-0 after:w-0 after:h-1 after:bg-primary after:rounded-t-lg after:transition-all after:duration-300
                hover:after:w-full hover:after:transition-all hover:after:duration-300`
              }
            >
              <Link href={`#`} className={`flex items-center gap-1`}>
                <item.icon size={18}/>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className={`text-xs text-neutral-600 dark:text-neutral-300`}>در دیجی‌کالا بفروشید!</div>
      </div>
      <div 
        className={
          `px-3 py-1 text-xs bg-orange-500/10 text-[#f57f17] rounded-full flex flex-col relative
          after:content-['لطفا_شهر_خود_را_وارد_کنید'] after:w-full after:text-[10px] after:px-1 after:py-3 after:bg-neutral-800 after:rounded-lg
          after:hidden
          hover:after:flex hover:after:absolute hover:after:top-8 hover:after:inset-x-0
          hover:after:justify-center`
        }
      >
        <div className={`flex items-center gap-2`}>
          <MapPin size={20}/>
          <span>انتخاب آدرس</span>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;