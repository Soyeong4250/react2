import React from 'react';
import FormControl from '../../components/FormControl';

// const OrderForm = () => {

class OrderForm extends React.Component {  // 계속 유지되는 값을 만들기 위해 class 사용
    constructor(props) {
        super(props)

        this.formRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this)  // handleSubmit이 비동기로 동작하므로 현재 인스턴스를 this로 고정
    }

    getInputValueByName(name) {
        if(!this.formRef.current) return;  // 렌더링 되기 전에는 formRef가 null 일 수 있으므로 return
        console.log('formRef', this.formRef.current);

        const inputElement = this.formRef.current.elements.namedItem(name)
        if(!inputElement) return '';

        return inputElement.value
    }
    
    handleSubmit(e) {
        e.preventDefault();  // 서버로 다시 요청하는 기본 동작을 막기 위해 사용
        
        const deliveryAddress = this.getInputValueByName('deliveryAddress')
        const deliveryContact = this.getInputValueByName('deliveryContact')
        const paymentMethod = this.getInputValueByName('paymentMethod')
        const messageToShop = this.getInputValueByName('messageToShop')
        const messageToRider = this.getInputValueByName('messageToRider')
        
        console.log("submit", this.formRef.current, {
            deliveryAddress,
            deliveryContact,
            paymentMethod,
            messageToShop,
            messageToRider
        });
    }

    render() {
        return (
            <form className='OrderForm' id='order-form' ref={this.formRef} onSubmit={this.handleSubmit}>
                <FormControl label="주소" htmlFor={'deliveryAddress'} required>
                    <input type="text" name='deliveryAddress' id='deliveryAddress' placeholder='배달받을 주소를 입력하세요.' required autoFocus/>
                </FormControl>
                <FormControl label="연락처" htmlFor={'deliveryContact'} required>
                    <input type="text" name='deliveryContact' id='deliveryContact' placeholder='연락처를 입력하세요.' required pattern='^\d{2,3}-\d{3,4}-\d{4}$'/>
                </FormControl>
                <FormControl label="결제수단" htmlFor={'paymentMethod'} required>
                    <select name='paymentMethod' id='paymentMethod'>
                        <option value="마이페이">마이페이</option>
                        <option value="만나서 결제">만나서 결제</option>
                    </select>
                </FormControl>
                <FormControl label="가게 사장님께" htmlFor={'messageToShop'}>
                    <textarea name='messageToShop' id='messageToShop'/>
                </FormControl>
                <FormControl label="라이더님께" htmlFor={'messageToRider'}>
                    <textarea name='messageToRider' id='messageToRider'/>
                </FormControl>
            </form>
        );
    }
}

export default OrderForm