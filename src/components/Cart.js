import { clearItem } from "../utils/redux-store/slices/cartSlice";
import RestrauntItems from "./RestrauntItems";
import {useSelector, useDispatch} from 'react-redux';
const Cart = () => {
    const cartItem = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
   function clearCartHandler() {
    console.log('called')
        dispatch(clearItem());
    }
    return (
        <div>
            <p className="text-center mt-5 font-semibold text-2xl mb-5">Cart</p>
            <button className="block m-auto border py-2 px-4 bg-slate-800 text-white rounded" onClick={() => {clearCartHandler()}}>Clear cart</button>
            <div className="w-[60%] m-auto">
                <RestrauntItems items={cartItem} key={cartItem.id}/>
            </div>
        </div>
    )
}
export default Cart;