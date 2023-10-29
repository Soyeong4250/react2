const Page = () => {
  return (
    <div className="Page">
      <header>
        <Title>메뉴목록</Title>
      </header>
      <main>
        <ul>
          <li>
            <ProductItem product={sample} />
          </li>
        </ul>
      </main>
      <footer>
        <Navbar />
      </footer>
    </div>
  );
};
