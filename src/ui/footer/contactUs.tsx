import { ChevronUp } from "lucide-react";
import mainLogo from "@/assets/images/main_page/full-horizontal.svg";
import Image from "next/image";


const ContactUs = () => {
  return (
    <div className={`flex flex-col gap-3`}>
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
  );
};

export default ContactUs;
