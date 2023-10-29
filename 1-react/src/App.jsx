// import Button from "./components/Button";
import ProductItem from "./components/ProductItem";

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
          <h1>메뉴 목록</h1>
        </header>
        <main>
          <ul>
            <li>
              {/* <div className="ProductItem">
                <div className="description">
                  <h2>고소한 바질 파스타</h2>
                  <div>6,000원</div>
                  <Button
                    styleType={"brand"}
                    onClick={() => console.log("주문하기 클릭")}
                  >
                    주문하기
                  </Button>
                </div>
                <div className="thumbnail">
                  <img
                    src="./images/menu-고소한바질파스타.jpg"
                    alt="고소한바질파스타 6,000원"
                  />
                </div>
              </div> */}
              <ProductItem product={sample} />
            </li>
          </ul>
        </main>
        <footer>
          <nav className="Navbar">
            <a className="active" href="#">
              메뉴목록
            </a>
            <a className="" href="#">
              주문내역
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default App;
