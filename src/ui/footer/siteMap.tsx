import { footerGroups } from '@/lib/footerGroups';
import Link from 'next/link';
import { Instagram, Aparat, Bale, Linkedin, Twitter } from '@/ui/customLogos';

const SiteMap = () => {
  const socialMediaLogos = [Instagram, Twitter, Linkedin, Aparat, Bale];

  return (
    <div className={`flex justify-between`}>
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
      <div className={`flex flex-col gap-8`}>
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
  );
};

export default SiteMap;
