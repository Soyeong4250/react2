// import ProductPage from "./pages/ProductPage";
// import OrderPage from "./pages/OrderPage";
import { createEventEmitter } from "../../shared/lib/EventEmitter";
import CartPage from "./pages/CartPage";

function App() {
  // return <ProductPage />;
  // return <OrderPage />
  return <CartPage />
}

export default App;

const eventEmitter = createEventEmitter(0);
const logger = value => console.log(value);

eventEmitter.on(logger);  // App.jsx에 이벤트가 들어오면 logging
console.log(eventEmitter.get());  // 0
eventEmitter.set(1);  // 1
eventEmitter.set(2);  // 2

setTimeout(() => eventEmitter.set(10), 3000);  // 비동기로 3초후에 10 출력