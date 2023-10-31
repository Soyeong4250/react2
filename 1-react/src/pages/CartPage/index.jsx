import Button from "../../components/Button";
import Page from "../../components/Page";
import Title from "../../components/Title";
import ProductItem from './../../components/ProductItem';
import FormControl from "../../components/FormControl";

const sample =  {
  id: "CACDA421",
  name: "해물 계란 라면",
  price: 6000,
  thumbnail: "./images/menu-해물계란라면.jpg"
};

const CartPage = () => (
  <div className="CartPage">
      <Page 
      header={<Title backUrl={"/"}>장바구니</Title>} 
      footer={<Button styleType={'brand-solid'} block>결제하기</Button>}>
        <ProductItem product={sample}/>
      </Page>
      <FormControl />
  </div>
);

export default CartPage;