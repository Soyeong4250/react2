import Page from "../../components/Page";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import Card from "../../components/Card";
import OrderDeliveryCard from "./OrderDeliveryCard";

const sample = {
  id: "CACDA420",
  orderDate: "2023. 10. 30. 오후 1:44:06",
  status: "배달중",
  name: "짜장면",
  totalPrice: 7000,
  paymentMethod: "마이페이",
  productPrice: 6000,
  deliveryPrice: 3000,
  discountPrice: 2000,
  deliveryAddress: "서울특별시 송파구 잠실동 1번지",
  deliveryContact: "010-1111-2222",
  messageToShop: "포크는 주지 마세요",
  messageToRider: "안전하게 오세요",
  position: [
      60,
      60
  ]
}

const OrderPage = () => (
  <div className="OrderPage">
    <Page header={<Title>주문내역</Title>} footer={<Navbar />}>
      {/* <Card /> */}
      <OrderDeliveryCard order={sample} />
    </ Page>
  </div>
);

export default OrderPage;