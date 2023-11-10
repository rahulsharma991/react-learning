import Cards from './Cards';
import {restroData} from '../utils/restroData';
const Body = () => {
   function getTopRatedRestraunts() {
        console.log('top rated')
    }
    return (
      <div className='body'>
       <div className='filter'>
        <button className='filter-btn' onClick={() => getTopRatedRestraunts()}>Top rated restraunts</button>
       </div>
        <div className='restro-container'>
       {
        restroData.map(data => {
            <Cards key={data.id} cardData={data}/>
        })
       }
    
        </div>
      </div>
    )
  }
  export default Body;