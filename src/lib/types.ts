import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type MegaMenuType =  {
  title: string;
  icon: string
  href: string;
  allProducts: {
    title: string;
    href: string;
  };
  columns: {
    title: string;
    href: string;
    items: {
      title?: string;
      href?: string;
    }[];
  }[][];
}[];

export type FooterGroup = {
  title: string;
  items: {
    title: string;
    href: string;
  }[];
};

export type SocialLink = {
  name: string;
  href: string;
  ariaLabel: string;
};