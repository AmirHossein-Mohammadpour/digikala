import Header from "@/ui/header/header";
import NavBar from "@/ui/header/navBar";
import Image from "next/image";
import topBanner from "@/assets/images/main_page/fa39599ce966e4e981fbe9c44604a272c1ccc96e_1719066045.gif";


const MainLayout = ({children}: {children: LayoutProps<'/'>}) => {
  return (
    <>
      <div className={`h-9 lg:h-15`}>
        <Image
          src={topBanner}
          alt={"Top Banner"}
          className={`w-full h-full object-cover`}
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