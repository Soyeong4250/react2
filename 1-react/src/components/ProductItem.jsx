import Button from "./Button";

const ProductItem = () => {
  return (
    <div className="ProductItem">
      <div className="description">
        <h2>고소한 바질 파스타</h2>
        <div>6,000원</div>
        {/* <button className="Button brand">주문하기</button> */}
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
    </div>
  );
};

export default ProductItem;
