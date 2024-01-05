import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import {useSelector} from 'react-redux';

const Header = () => {
const cartItem = useSelector((store) => store.cart.items.length);
  const {loggedInUser} = useContext(UserContext)
    const [loginBtn, setLoginBtn] = useState('Login');
    return (
      <div className='flex items-center justify-between  bg-pink-200 shadow'>
          <img src={LOGO_URL} className="w-24 h-24 "/>
        <div className='nav-items p-4'>
          <ul className="flex">
            <li className="m-2"><Link to='/'>Home </Link></li>
            <li className="m-2"><Link to='about'>About us </Link></li>
            <li className="m-2"><Link to='contact'>Contact us </Link></li>
            <li className="m-2 font-bold"><Link to='cart'>Cart ({cartItem} item)</Link></li>
            <li className="m-2">{loggedInUser}</li>
            <button className="bg-teal-50 px-2" onClick={() => { setLoginBtn('Logout')}}>{loginBtn}</button>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;