import React from "react";
import ProductApi from "shared/api/ProductApi";
import Navbar from "../../components/Navbar";
import Page from "../../components/Page";
import ProductItem from "../../components/ProductItem";
import Title from "../../components/Title";

const sample = {
  id: "CACDA421",
  name: "해물 계란 라면",
  price: 6000,
  thumbnail: "./images/menu-해물계란라면.jpg",
};

class ProductPage extends React.Component {
  constructor(props) {
    super(props); // React.Component의 생성자 호출

    this.state = {
      productList: [], // 상품을 데이터를 받아올 빈 배열
    };
  }

  async fetch() {
    try {
      const productList = await ProductApi.fetchProductList();
      this.setState({ productList }); // 상태 갱신
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {
    this.fetch(); // Mount 시에 fetch 함수 실행
  }

  render() {
    return (
      <div className="ProductPage">
        <Page header={<Title>메뉴목록</Title>} footer={<Navbar />}>
          <ul>
            {this.state.productList.map((product) => (
              <li key={product.id}>
                <ProductItem product={product} />
              </li>
            ))}
          </ul>
        </Page>
      </div>
    );
  }
}

export default ProductPage;
