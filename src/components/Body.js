import Cards, {withPromotedLabel} from './Cards';
import {restroData} from '../utils/restroData';
import { useState,useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/custom-hooks/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
    const [listofRestraunts, setListofRestraunts] = useState([]);
    const [searchedData,setSearchedData] = useState([]);
    const [searchText,setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();
    const PromotedCards = withPromotedLabel(Cards);
   function getTopRatedRestraunts() {
        const filteredRestraunts = restroData.filter(data => {
            return Number(data.rating) > 4;
        });
         setListofRestraunts(filteredRestraunts);
    }

    function updateSearchValue(event) {
        setSearchText(event.target.value)
    }
    function getSearchedData() {
        const searchData = listofRestraunts.filter(res => {
            return res.restroName.toLowerCase().includes(searchText);
        });
        setSearchedData(searchData);
    }
    useEffect(()=> {setListofRestraunts(restroData),setSearchedData(restroData)},[]);
    const {loggedInUser, setUserName} = useContext(UserContext);
    if(!onlineStatus) {
        return <h1>No internet</h1>
    }
    return listofRestraunts.length == 0? <Shimmer /> : (
      <div className='mt-7 px-8'>
       <div className='flex'>
        <div className='mr-8'>
            <input type='text' className="border border-black border-gray-400 p-1 rounded" value={searchText} onChange={($event) => updateSearchValue($event)}/>
            <button className="bg-green-200 h-[34px] w-20 rounded ml-2" onClick={() => getSearchedData()}>Search</button>
        </div>
        <button className='rounded ml-2 px-3 bg-green-500 text-white' onClick={() => getTopRatedRestraunts()}>Top rated restraunts</button>
        <label className='ml-5'>UserName: 
            <input className='border-black border' type='text' value={loggedInUser} onChange={(e) => (setUserName(e.target.value))}/>
        </label>
       </div>
        <div className='mt-10 flex flex-wrap'>
       {
        searchedData.map(data => (data.isPromoted?<PromotedCards key={data.id} cardData={data}/>:<Cards key={data.id} cardData={data}/>))
       }
        </div>
      </div>
    )
  }
  export default Body;