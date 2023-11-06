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
import MyReact from "./lib/MyReact";

const countContext = MyReact.createContext({
  count: 0,
  setCount: () => {},
})

class CountProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  // 누군가가 값을 사용할 수 있도록 state에 저장
      count: 0,
    };
  }

  render() {
    const value = {
      count: this.state.count,
      setCount: (nextValue) => this.setState({ count: nextValue }),
    }

    return (
    <countContext.Provider value={value}>
      {this.props.children}
    </countContext.Provider>
    );
  }
}

const Count = () => {
  return(
  <countContext.Consumer>
    {(value) => <div>{value.count}</div>}
  </countContext.Consumer>
  );
}

const PlusButton = () => {
  return (
    <countContext.Consumer>
      {(value) => (
        <button onClick={()=>value.setCount(value.count + 1)}>+ 카운트 올리기</button>
      )}
    </countContext.Consumer>
  )
}

export default () => (
  <CountProvider>
    <Count />
    <PlusButton />
  </CountProvider>
)