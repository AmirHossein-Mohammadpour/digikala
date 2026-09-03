import Image from "next/image";
import Link from "next/link";
import club from "@/assets/images/main_page/footer/footer_b/digiclub.svg";
import express from "@/assets/images/main_page/footer/footer_b/digiexpress.svg";
import digify from "@/assets/images/main_page/footer/footer_b/digify.svg";
import business from "@/assets/images/main_page/footer/footer_b/digikala-business.svg";
import mag from "@/assets/images/main_page/footer/footer_b/digimag.svg";
import mehr from "@/assets/images/main_page/footer/footer_b/digiMehr.svg";
import next from "@/assets/images/main_page/footer/footer_b/diginext.svg";
import pay from "@/assets/images/main_page/footer/footer_b/digipay.svg";
import plus from "@/assets/images/main_page/footer/footer_b/digiplus.svg";
import style from "@/assets/images/main_page/footer/footer_b/digistyle.svg";
import jet from "@/assets/images/main_page/footer/footer_b/jet.svg";
import magnet from "@/assets/images/main_page/footer/footer_b/magnet.svg";

const Services = () => {
  const serviceLogos = [
    club,
    express,
    digify,
    business,
    mag,
    mehr,
    next,
    pay,
    plus,
    style,
    jet,
    magnet,
    express,
    digify,
    business,
    mag,
    mehr,
    jet,
  ];
  return (
    <div className={`flex flex-wrap divide-y divide-x divide-[#ddd]`}>
      {serviceLogos.map((logo, index) => (
        <Link
          key={index}
          href={`#`}
          className={`flex justify-center items-center px-5 py-7.5 shrink-0 basis-30 grow bg-[#f1f1f1]`}
        >
          <Image
            src={logo}
            alt={`services`}
            className={`h-5 w-auto object-contain`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Services;
