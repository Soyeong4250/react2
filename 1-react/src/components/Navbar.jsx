import * as MyRouter from '../lib/MyRouter';

const Navbar = () => {
  return (
    <nav className="Navbar">
      {/* <a className="active" href="#">
        메뉴목록
      </a>
      <a className="" href="#">
        주문내역
      </a> */}
      <MyRouter.Link className="active" to="/">메뉴목록</MyRouter.Link>
      <MyRouter.Link to="/order">주문내역</MyRouter.Link>
    </nav>
  );
};

export default Navbar;
