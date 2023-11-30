import { Link } from "react-router-dom";
const Cards = ({cardData}) => {
     return ( <Link to={"restraunt/"+ cardData.id}><div className="restro-cards" >
     <div className='restro-image'> <img src={cardData.image} alt={cardData.restroName} className='restro-logo' /></div>
      <h3>{cardData.restroName}</h3>
      <h5>{cardData.cusines}</h5>
      <h5>{cardData.rating}</h5>
      <h5>{cardData.cookTime}</h5>
      </div></Link>
     )
  }
  export default Cards;