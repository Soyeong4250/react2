import FormControl from '../../components/FormControl';

const OrderForm = () => {
    return (
        <form className='OrderForm'>
            <FormControl label="주소" htmlFor={'deliveryAddress'} required>
                <input type="text" name='deliveryAddress' id='deliveryAddress' placeHolder='배달받을 주소를 입력하세요.' required autoFocus/>
            </FormControl>
            <FormControl label="연락처" htmlFor={'deliveryContact'} required>
                <input type="text" name='deliveryContact' id='deliveryContact' placeHolder='연락처를 입력하세요.' required pattern='^\d{2,3}-\d{3,4}-\d{4}$'/>
            </FormControl>
            <FormControl label="결제수단" htmlFor={'paymentMethod'} required>
                <select name='paymentMethod' id='paymentMethod' value=''>
                    <option value="마이페이">마이페이</option>
                    <option value="만나서 결제">만나서 결제</option>
                </select>
            </FormControl>
            <FormControl label="가게 사장님께" htmlFor={'messageToShop'} required>
                <textarea name='messageToShop' id='messageToShop'/>
            </FormControl>
            <FormControl label="라이더님께" htmlFor={'messageToRider'} required>
                <textarea name='messageToRider' id='messageToRider'/>
            </FormControl>
        </form>
    );
}

export default OrderForm