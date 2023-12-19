import { Link } from "react-router-dom";
const Cards = ({cardData}) => {
     return ( <Link to={"restraunt/"+ cardData.id} className="m-3"><div className="w-[200px] bg-gray-100 hover:bg-gray-200 rounded shadow border border-b-slate-300">
   <img src={cardData.image} alt={cardData.restroName} className='h-[200px] w-[100%]' />
   <div className="p-4 text-sm h-[130px] overflow-auto">
      <h3 className="font-semibold">{cardData.restroName}</h3>
      <h5>• {cardData.cusines}</h5>
      <h5>• {cardData.rating}</h5>
      <h5>• {cardData.cookTime}</h5>
      </div>
      </div></Link>
     )
  }

  export const withPromotedLabel = (Cards) => {
   return (props) => {
      return (
         <div className="relative">
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
            <Cards {...props}/>
         </div>
      )
   }
  }
  export default Cards;