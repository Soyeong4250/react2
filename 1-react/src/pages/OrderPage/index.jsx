import Page from "../../components/Page";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";

const OrderPage = () => (
  <div className="OrderPage">
    <Page header={<Title>주문내역</Title>} footer={<Navbar />}>
    컨텐츠 나오는 곳
    </ Page>
  </div>
);

export default OrderPage;