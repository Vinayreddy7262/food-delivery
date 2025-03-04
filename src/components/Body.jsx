import { useEffect } from "react";
import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";
function Body(){
    


    return(
        <>
            <Header></Header>
        <div className="flex flex-wrap">
        {restaurants.map((res)=>
                <RestaurantCard details={res}/>
            )}
        </div>
            
        </>
    );
}

export default Body;


// Props --- Passing properties from one component to another
// React Reconciliation and Virtual DOMs
// Hooks --- Simple JavaScript Function
// useState Hook - To create state variables
// State variables --- Whenever state variables change , your UI is re rendered
// useEffect Hook --- Code inside useEffect is executed after the component is rendered (after the component is mounted)
