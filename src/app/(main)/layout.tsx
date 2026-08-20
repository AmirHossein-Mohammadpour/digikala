const MainLayout = ({children}: {children: LayoutProps<'/'>}) => {
  return (
    <>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </>
  );
}

export default MainLayout;