import localFont from 'next/font/local';
import { Geist } from 'next/font/google';

const IranSans = localFont({
  src: [
    {path: "../assets/fonts/IRANSansXFaNum-Light.ttf", weight: '300'},
    {path: "../assets/fonts/IRANSansXFaNum-Regular.ttf", weight: '400'},
    {path: "../assets/fonts/IRANSansXFaNum-Medium.ttf", weight: '500'},
    {path: "../assets/fonts/IRANSansXFaNum-Bold.ttf", weight: '700'},
  ],
  variable: '--font-iranSans',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist'
})

export {IranSans, geist};