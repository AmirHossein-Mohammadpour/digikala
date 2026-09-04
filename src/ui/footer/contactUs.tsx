import { ChevronUp, Headset } from "lucide-react";
import mainLogo from "@/assets/images/main_page/full-horizontal.svg";
import logo from "@/assets/images/main_page/footer/market/footerlogo2.webp";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className={``}>
      <div
        id={`ContactUS-Mobile`}
        className={`lg:hidden flex flex-col gap-2 text-[9px]`}
      >
        <button
          className={`self-center flex justify-center items-center gap-1 py-1.75 px-4 text-[#424750] dark:text-[#bdb8b5] bg-[#f2f2f2] dark:bg-[#3f3f3f] rounded-full font-bold`}
        >
          رفتن به بالا
          <ChevronUp size={14} strokeWidth={3} />
        </button>
        <div className={`flex justify-between items-center`}>
          <div className={`flex items-center gap-2`}>
            <div
              className={`p-2 text-[#424750] dark:text-[#bdb8b5] bg-[#f2f2f2] dark:bg-[#3f3f3f] rounded-full`}
            >
              <Headset size={20} />
            </div>
            <p className={`text-[10px] text-neutral-500 dark:text-neutral-400`}>
              ۷ روز هفته، ۲۴ ساعت
            </p>
          </div>
          <button
            className={`py-2.5 px-4 text-[#424750] dark:text-[#bdb8b5] bg-[#f2f2f2] dark:bg-[#3f3f3f] rounded-full font-bold`}
          >
            تماس
          </button>
        </div>
        <hr className={`text-neutral-200 dark:text-neutral-700`} />
        <div className={`flex justify-between items-center`}>
          <div className={`flex items-center gap-2`}>
            <div>
              <Image src={logo} alt={`اپلیکیشن دیجی‌کالا`} className={`size-9 rounded-full`}/>
            </div>
            <p className={`text-[10px] text-neutral-500 dark:text-neutral-400`}>
              تجربه خرید بهتر در
            </p>
          </div>
          <button
            className={`py-2.5 px-4 text-[#424750] dark:text-[#bdb8b5] bg-[#f2f2f2] dark:bg-[#3f3f3f] rounded-full font-bold cursor-pointer`}
          >
            دانلود
          </button>
        </div>
        <hr className={`text-neutral-200 dark:text-neutral-700`} />
      </div>
      <div id={`ContactUs-Desktop`} className={`hidden lg:flex flex-col gap-3`}>
        <div className={`w-full flex justify-between items-center`}>
          <Image src={mainLogo} alt={`دیجی‌کالا`} className={`w-49 h-auto`} />
          <button
            className={`flex justify-between items-center gap-2 border px-4 py-2 leading-4 text-xs font-bold text-neutral-400 border-neutral-200 rounded-lg`}
          >
            بازگشت به بالا
            <ChevronUp size={22} className={`py-0.5`} />
          </button>
        </div>
        <div
          className={`flex items-center gap-5 text-xs text-gray-700 dark:text-gray-300`}
        >
          <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
          <span>|</span>
          <p>۰۲۱-۹۱۰۰۰۱۰۰</p>
          <span>|</span>
          <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
