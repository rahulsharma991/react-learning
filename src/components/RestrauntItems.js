import {useDispatch} from 'react-redux'
import { addItem } from '../utils/redux-store/slices/cartSlice';
const RestrauntItems = ({items}) => {
    const dispatch = useDispatch();
    function handleMenuItem(item) {
            dispatch(addItem(item));
    }
    return (
        <div className="mt-6">
            {items.map(item => (
                <div key={item.id} className="p-2 m-2 border-gray-200 border-b-2 flex justify-between items-center">
                    <span>{item.itemName} - {item.price}</span>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white text-sm h-[30px] px-4 border border-blue-500 hover:border-transparent rounded-full" onClick={() => handleMenuItem(item)}>Add +</button>
                </div>
            ))}
        </div>
    )
}

export default RestrauntItems;