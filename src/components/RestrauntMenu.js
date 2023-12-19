import { useEffect, useState } from "react";
import { restroData } from "../utils/restroData";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestrauntCategory from "./RestrauntCategory";

const RestrauntMenu = () => {
    const [showIndex, setShowIndex] = useState(0)
    const {id} = useParams();
    const [restro, setRestroData] = useState("");
    useEffect(() => {
       const filteredRestro  =  restroData.find(restro => {
            if(restro.id == id) {
                return restro;
            }
        });
        setRestroData(filteredRestro);
    },[]);

return !restro.restroName? <Shimmer /> :(
    <div className="px-8 mt-7">
        <p className="text-3xl">Restraunt Name: {restro.restroName}</p>
        <h1 className="mt-5 ml-3 text-2xl">Menu</h1>
        {
            restro.items.map((category,index) => ( 
                <RestrauntCategory data={category} key={category.id} showItems={index == showIndex? true: false} setShowIndex={() => setShowIndex(index)}/>
                ))
        }
    </div>
)
}
export default RestrauntMenu;