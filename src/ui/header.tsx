import mainLogo from "@/assets/images/main_page/full-horizontal.svg";
import { Bell, LogIn, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ children }: { children: React.ReactNode }) => {
  const a = [
    {name: 'سرویس‌ها', logoURL: 'https://dkstatics-public.digikala.com/superapp-file/4f1a58293164d31b1a3cf1ef41f6ba4ba4fa4087_1739791745.png?x-oss-process=image/resize,w_300/quality,q_90'},
    {name: 'دیجی‌کالا', logoURL: 'https://dkstatics-public.digikala.com/superapp-file/e65a134ca4ce423f9724a4a57cde4979f9d7f6b2_1764619352.png?x-oss-process=image/resize,w_300/quality,q_90'},
    {name: 'سوپر‌مارکت', logoURL: 'https://dkstatics-public.digikala.com/superapp-pillar-theme-item/f8cd2415a4af444886bf8218a11fcb542069c46f_1786273072.png'},
    {name: 'طلا و نقره', logoURL: 'https://dkstatics-public.digikala.com/superapp-file/9163a33a3b244a179850fb9a216a6d6479fa0b10_1778486635.gif?x-oss-process=image/resize,w_300'},
    {name: 'بازار', logoURL: 'https://dkstatics-public.digikala.com/superapp-file/92c304ec6be02a73bd390b256d3fe95211922f0f_1784370058.gif?x-oss-process=image/resize,w_300'},
    {name: 'استایل', logoURL: 'https://dkstatics-public.digikala.com/superapp-file/d556c0c053d0b1ddd8e3bedc0994da0994a06da8_1782388337.png?x-oss-process=image/resize,w_300/quality,q_90'},
    {name: 'اعتبار خرید', logoURL: 'https://dkstatics-public.digikala.com/superapp-file/7ae7902fbc209de7d80e79e1e465bf9f8840aec0_1763738479.png?x-oss-process=image/resize,w_300/quality,q_90'},
    {name: 'گیشه', logoURL: 'https://dkstatics-public.digikala.com/superapp-file/d94e567e7af868dfed41df4b8928f8a33c2bb8db_1781371877.png?x-oss-process=image/resize,w_300/quality,q_90'},
    {name: 'دارو', logoURL: 'https://dkstatics-public.digikala.com/superapp-file/1e1c0ebcb22bde50e2ad18eec1debe6ab6e1a8e2_1764619448.png?x-oss-process=image/resize,w_300/quality,q_90'},
    {name: 'هایپر‌مارکت', logoURL: 'https://dkstatics-public.digikala.com/superapp-file/43795410570a5e6aa86b0667de24737b6584606f_1764619422.png?x-oss-process=image/resize,w_300/quality,q_90'},
  ]
  return (
    <header className={`@container/header sticky top-0 z-10 bg-white dark:bg-darkBg shadow-sm shadow-black/50 dark:shadow-black`}>
      <div id={`mobileHeader`} className={`@5xl/header:hidden`}>
        <div className={`flex flex-col bg-[#f2f3f5] dark:bg-[#181818]`}>
          <div className={`flex justify-around gap-2 overflow-x-auto px-4 py-2 text-[11px]`}>
            {a.map((item, index) => (
              <div 
                key={index} 
                className={
                  `flex-1 rounded-lg min-w-17 py-2 flex flex-col justify-between items-center 
                  border border-neutral-200 dark:border-neutral-600
                  ${item.name === 'دیجی‌کالا' ? 'bg-primary text-white':'bg-white dark:bg-darkBg'}`
                }
              >
                <Image src={item.logoURL} alt={item.name} width={64} height={64} className={`w-8 h-auto`}/>
                <span>{item.name}</span>
              </div>
            ))} 
          </div>
          <div></div>
        </div>
        {/* {children} */}
      </div>
      <div id={`laptopHeader`} className={`hidden @5xl/header:block`}>
        <div className={`flex justify-between items-center ps-4 pe-2 py-3`}>
          <div className={`flex items-center gap-5`}>
            <h1>
              <Link href={`#`} className={``}>
                <Image
                  src={mainLogo}
                  alt={`دیجی‌کالا`}
                  className={`w-48.75 h-auto`}
                  loading={`eager`}
                />
              </Link>
            </h1>
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
      </div>
    </header>
  );
};

export default Header;
