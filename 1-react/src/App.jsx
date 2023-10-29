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
      {/* <div className="Page">
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
      </div> */}
      <Page />
    </div>
  );
}

export default App;
