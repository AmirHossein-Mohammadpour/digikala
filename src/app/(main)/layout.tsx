import Header from "@/ui/header";
import NavBar from "@/ui/navBar";
import Image from "next/image";
import Link from "next/link";
import topBanner from "@/assets/images/main_page/fa39599ce966e4e981fbe9c44604a272c1ccc96e_1719066045.gif";


const MainLayout = ({children}: {children: LayoutProps<'/'>}) => {
  return (
    <>
      <div className={`h-15`}>
        <Image
          src={topBanner}
          alt={"Top Banner"}
          className={`w-full h-full object-cover`}
          // loading="eager"
        />
      </div>
      <Header>
        <NavBar/>
      </Header>
      {children}
      <footer>Footer</footer>
    </>
  );
}

export default MainLayout;