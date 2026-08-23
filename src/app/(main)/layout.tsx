import Link from "next/link";

const MainLayout = ({children}: {children: LayoutProps<'/'>}) => {
  return (
    <>
      <header>
        <Link href={`/login`} className={``}>LOGIN</Link>
      </header>
      {children}
      <footer>Footer</footer>
    </>
  );
}

export default MainLayout;