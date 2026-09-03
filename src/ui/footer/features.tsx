import Image from "next/image";
import Link from "next/link";
import express from '@/assets/images/main_page/footer/express-delivery.svg';
import cashOnDelivery from '@/assets/images/main_page/footer/cash-on-delivery.svg';
import support from '@/assets/images/main_page/footer/support.svg';
import daysReturn from '@/assets/images/main_page/footer/days-return.svg';
import original from '@/assets/images/main_page/footer/original-products.svg';

const Features = () => {
  const services = [
      {name: 'امکان تحویل اکسپرس', image: express},
      {name: 'امکان پرداخت در محل', image: cashOnDelivery},
      {name: '۷ روز هفته، ۲۴ ساعته', image: support},
      {name: 'هفت روز ضمانت بازگشت کالا', image: daysReturn},
      {name: 'ضمانت اصل بودن کالا', image: original},
    ];
  return (
    <div
      className={`flex justify-between items-center py-3 text-[11px] text-gray-700 dark:text-gray-300`}
    >
      {services.map((service, index) => (
        <Link
          key={index}
          href={`#`}
          className={`flex-1 flex flex-col items-center gap-1.5`}
        >
          <Image
            src={service.image}
            alt={service.name}
            className={`w-14 h-auto`}
          />
          <p>{service.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Features;
