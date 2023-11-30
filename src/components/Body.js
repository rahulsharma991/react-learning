import Cards from './Cards';
import {restroData} from '../utils/restroData';
import { useState,useEffect } from 'react';
import Shimmer from './Shimmer';

const Body = () => {
    const [listofRestraunts, setListofRestraunts] = useState([]);
    const [searchedData,setSearchedData] = useState([]);
    const [searchText,setSearchText] = useState("");
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

    return listofRestraunts.length == 0? <Shimmer /> : (
      <div className='body'>
       <div className='filter'>
        <div className='search'>
            <input type='text' value={searchText} onChange={($event) => updateSearchValue($event)}/>
            <button className='search-btn' onClick={() => getSearchedData()}>Search</button>
        </div>
        <button className='filter-btn' onClick={() => getTopRatedRestraunts()}>Top rated restraunts</button>
       </div>
        <div className='restro-container'>
       {
        searchedData.map(data => (<Cards key={data.id} cardData={data}/>))
       }
        </div>
      </div>
    )
  }
  export default Body;