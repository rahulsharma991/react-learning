import { useEffect, useState } from "react";
import { restroData } from "../utils/restroData";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestrauntMenu = () => {
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
    <div>
        <p>{restro.restroName}</p>
        <h1>Menu</h1>
        {restro.items.map(outer => (
            <div key={outer.id}>
            <h3>{outer.name}</h3>
            {outer.type.map(inner => (
                <ul key={inner.id}>
                    <li>{inner.value}</li>
                </ul>
            ))}
            </div>
        ))}
    </div>
)
}
export default RestrauntMenu;