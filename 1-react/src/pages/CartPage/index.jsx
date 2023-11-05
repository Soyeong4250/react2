import React from 'react';
import ProductApi from '../../../../shared/api/ProductApi';
import PaymentButton from "../CartPage/PaymentButton"
import Page from "../../components/Page";
import Title from "../../components/Title";
import ProductItem from './../../components/ProductItem';
import OrderForm from './OrderForm';

// const sample =  {
//   id: "CACDA421",
//   name: "해물 계란 라면",
//   price: 6000,
//   thumbnail: "./images/menu-해물계란라면.jpg"
// };

class CartPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { product: null };
  }

  async fetch() {
    try {
      const product = await ProductApi.fetchProduct("CACDA423");
      this.setState({ product });
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    const { product } = this.state;

    return(<div className="CartPage">
        <Page 
        header={<Title backUrl={"/"}>장바구니</Title>} 
        footer={<PaymentButton />}>
          {product && <ProductItem product={ product } />}
        </Page>

        <OrderForm />
    </div>);
  }
}

export default CartPage;