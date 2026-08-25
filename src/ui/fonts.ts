import localFont from 'next/font/local';
import { Geist } from 'next/font/google';

const IranYekan = localFont({
  src: [
    // {path: "../assets/fonts/IRANSansXFaNum-Light.ttf", weight: '300'},
    {path: "../assets/fonts/IranYekan-Regular.woff", weight: '400'},
    {path: "../assets/fonts/IranYekan-Medium.woff", weight: '500'},
    {path: "../assets/fonts/IranYekan-Bold.woff", weight: '700'},
  ],
  variable: '--font-iranYekan',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist'
})

export {IranYekan, geist};