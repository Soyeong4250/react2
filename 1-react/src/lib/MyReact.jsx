import { createEventEmitter } from "../../../shared/lib/EventEmitter";

const MyReact = (function() {
  function createContext(initialValue) {{  // 생성자 함수
    const emitter = createEventEmitter(initialValue);
    
    const Provider = ({value, children}) => <>{children}</>;

    const Consumer = ({children}) => <>{children(emitter.get())}</>;  // render prop 사용 : emitter에 있는 값을 전달하기 위해
  
    return {
      Provider,
      Consumer,
    }
  }}

  return {
    createContext,
  }
})();

export default MyReact;