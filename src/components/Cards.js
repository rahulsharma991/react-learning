const Cards = (props) => {
    debugger
    console.log(props)

     return ( <div>
     <div className='restro-image'> <img src={data.image} alt={data.restroName} className='restro-logo' /></div>
      <h3>{data.restroName}</h3>
      <h5>{data.cusines}</h5>
      <h5>{data.rating}</h5>
      <h5>{data.cookTime}</h5>
      </div>
     )
  }
  export default Cards;