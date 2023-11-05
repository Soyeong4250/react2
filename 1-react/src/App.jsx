// import ProductPage from "./pages/ProductPage";
// import OrderPage from "./pages/OrderPage";
import CartPage from "./pages/CartPage";

function App() {
  // return <ProductPage />;
  // return <OrderPage />
  return <CartPage />
}

// export default App;

import React from "react";
class MyComponent extends React.Component {  // ref 객체는 지속적으로 관리할 수 있도록 저장해야 하므로 class로 생성
  divRef = React.createRef();  // ref 객체 생성

  constructor(props) {
    super(props)
    console.log('constructor', this.divRef);
  }

  render() {
    console.log('render', this.divRef);
    return <div ref={this.divRef}>div</div>
  }

  componentDidMount() {
    console.log('componentDidMount', this.divRef);
    const divElement = this.divRef.current;
    divElement.style.backgroundColor = 'red';
    divElement.style.height = '100px';
    divElement.style.width =  '100px';
  }
}

export default MyComponent;