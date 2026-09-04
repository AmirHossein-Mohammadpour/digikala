import Image from "next/image";
import Link from "next/link";
import footerLogo from "@/assets/images/main_page/footer/market/footerlogo2.webp";
import bazar from "@/assets/images/main_page/footer/market/coffe-bazzar.svg";
import myket from "@/assets/images/main_page/footer/market/myket.svg";
import sibApp from "@/assets/images/main_page/footer/market/sib-app.svg";
import more from "@/assets/images/main_page/footer/market/More.svg";

const AppDownload = () => {
  return (
      <div className={`hidden lg:flex justify-between px-5 py-4 bg-[#3c4b6d] rounded-lg`}>
        <div className={`flex items-center gap-4`}>
          <Image src={footerLogo} alt={`دیجی‌کالا`} className={`w-11 h-auto`} />
          <p className={`text-[21px] text-white font-medium leading-11`}>
            دانلود اپلیکیشن دیجی‌کالا
          </p>
        </div>
        <div className={`flex items-center gap-6`}>
          <div className={`flex items-center gap-4`}>
            <Link href={`#`}>
              <Image src={bazar} alt={`مایکت`} className={`w-35.5 h-11`} />
            </Link>
            <Link href={`#`}>
              <Image src={myket} alt={`بازار`} className={`w-35.5 h-11`} />
            </Link>
            <Link href={`#`}>
              <Image src={sibApp} alt={`سیب‌اپ`} className={`w-35.5 h-11`} />
            </Link>
          </div>
          <div>
            <Link href={`#`} className={``}>
              <Image
                src={more}
                alt={`more`}
                className={`border w-10.5 bg-white border-neutral-200 rounded`}
              />
            </Link>
          </div>
        </div>
      </div>
  );
};

export default AppDownload;
