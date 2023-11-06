import React from "react";
import { createEventEmitter } from "../../../shared/lib/EventEmitter";

const MyReact = (function() {
  function createContext(initialValue) {  // 생성자 함수
    const emitter = createEventEmitter(initialValue);
    
    class Provider extends React.Component {  // 컴포넌트의 생명주기 메서드를 사용하기 위해 class로 변경
      componentDidMount() {
        emitter.set(this.props.value);  // value가 변경될 때마다 구독 객체들에게 전파
      }

      componentDidUpdate() {  // props나 state가 변경되어 다시 update 할때마다 리렌더링
        emitter.set(this.props.value);
      }

      render() {
        return <>{this.props.children}</>;
      }
    }

    class Consumer extends React.Component {  // EventEmitter의 변경을 구독하는 과정을 생명주기 메서드에 넣기 위해 class로 변경
      // 상태가 바뀌어야 리렌더링이 이루어지므로
      constructor(props) {
        super(props);
        this.state = {
          value: emitter.get(),
        };
        this.setValue = this.setValue.bind(this);
      }

      setValue(nextValue) {
        this.setState({value: nextValue});
      }

      componentDidMount() {
        emitter.on(this.setValue);
      }

      // 컴포넌트가 Unmount될 때 EventEmitter를 Handler에서 해지
      componentWillUnmount() {
        emitter.off(this.setValue);
      }
      
      render() {
        return <>{this.props.children(this.state.value)}</>  // render prop 사용 : emitter에 있는 값을 전달하기 위해
      }
    }
  
    return {
      Provider,
      Consumer,
    };
  }

  return {
    createContext,
  };
})();

export default MyReact;