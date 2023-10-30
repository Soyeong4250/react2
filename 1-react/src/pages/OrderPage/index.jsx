import React from "react";
import OrderApi from 'shared/api/OrderApi';
import Page from "../../components/Page";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import OrderDeliveryCard from "./OrderDeliveryCard";
import OrderPaymentCard from "./OrderPaymentCard";
import OrderStatusCard from "./OrderStatusCard"

// const sample = {
//   id: "CACDA420",
//   orderDate: "2023. 10. 30. 오후 1:44:06",
//   status: "배달중",
//   name: "짜장면",
//   totalPrice: 7000,
//   paymentMethod: "마이페이",
//   productPrice: 6000,
//   deliveryPrice: 3000,
//   discountPrice: 2000,
//   deliveryAddress: "서울특별시 송파구 잠실동 1번지",
//   deliveryContact: "010-1111-2222",
//   messageToShop: "포크는 주지 마세요",
//   messageToRider: "안전하게 오세요",
//   position: [
//       60,
//       60
//   ]
// }

// const OrderPage = () => (
//   <div className="OrderPage">
//     <Page header={<Title>주문내역</Title>} footer={<Navbar />}>
//       <OrderStatusCard order={sample} />
//       <OrderPaymentCard order={sample} />
//       <OrderDeliveryCard order={sample} />
//     </ Page>
//   </div>
// );

class OrderPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      order: null
    }
  }

  async fetch() {
    try {
      const order = await OrderApi.fetchMyOrder();
      this.setState({order})
    }catch(e) {
      console.error(e);
    }
  }

  componentDidMount() {
    this.fetch()
  }

  render() {
    const {order} = this.state

    return (
      <div className="OrderPage">
        <Page header={<Title>주문내역</Title>} footer={<Navbar />}>
          {/* 조건부 렌더링 */}
          {order && (
            <>
            <OrderStatusCard order={order} />
            <OrderPaymentCard order={order} />
            <OrderDeliveryCard order={order} />
            </>
          )}
        </ Page>
      </div>
    )
  }
}

export default OrderPage;