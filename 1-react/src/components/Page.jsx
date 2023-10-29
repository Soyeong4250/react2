const Page = ({ header, footer, children }) => (
  <div className="Page">
    <header>
      {/* <Title>메뉴목록</Title> */}
      {header}
    </header>
    <main>
      {/* <ul>
          <li>
            <ProductItem product={sample} />
          </li>
        </ul> */}
      {children}
    </main>
    <footer>
      {/* <Navbar /> */}
      {footer}
    </footer>
  </div>
);

export default Page;
