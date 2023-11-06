export const createEventEmitter = (value) => {
  let handlers = [];

  const on = (handler) => handlers.push(handler);  // 구독자(수신자)를 추가하는 함수
  const off = (handler) => {  // 구독자(수신자)를 제거하는 함수
    handlers = handlers.filter((h) => h !== handler);
  };

  const get = () => value;  // closer 역할
  const set = (newValue) => {
    value = newValue;
    handlers.forEach((handler) => handler(value));  // 각 구독객체에게 변경된 값을 통지
  };

  return {
    on,
    off,
    get,
    set,
  };
};
