import Page from "../../components/Page";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import Card from "../../components/Card";

const OrderPage = () => (
  <div className="OrderPage">
    <Page header={<Title>주문내역</Title>} footer={<Navbar />}>
    {/* 컨텐츠 나오는 곳 */}
    <Card />
    </ Page>
  </div>
);

export default OrderPage;