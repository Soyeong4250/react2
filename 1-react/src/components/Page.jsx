const Page = ({ header, footer, children }) => (
  <div className="Page">
    <header>{header}</header>
    <main>{children}</main>
    <footer>{footer}</footer>
  </div>
);

export default Page;
