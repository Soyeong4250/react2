import Title from "./components/Title";
import ProductItem from "./components/ProductItem";
import Navbar from "./components/Navbar";

const sample = {
  id: "CACDA421",
  name: "해물 계란 라면",
  price: 6000,
  thumbnail: "./images/menu-해물계란라면.jpg",
};

function App() {
  return (
    <div className="ProductPage">
      <div className="Page">
        <header>
          {/* <h1>메뉴 목록</h1> */}
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
          {/* <nav className="Navbar">
            <a className="active" href="#">
            메뉴목록
            </a>
            <a className="" href="#">
            주문내역
            </a>
          </nav> */}
          <Navbar />
        </footer>
      </div>
    </div>
  );
}

export default App;
