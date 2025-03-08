import { useEffect,useState } from "react";
import Header from "./Header";
import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";
import Search from "./Search";
import TopRatedRestaurants from "./TopRatedRestaurants";
function Body(){
    const [filteredRestaurants,setFilteredRestants]=useState(restaurants)
  
    function filterRestaurants(filterRestaurants){
        setFilteredRestants(filterRestaurants);

    }
    function filterTopRatedRestaurants(){
        const topRatedRestaurants=filteredRestaurants.filter(
            (res) => res.rating > 4
        );
        setFilteredRestants(topRatedRestaurants);

    }
    


    return(
        <>
            <Header></Header>
            <Search filterFunc={filterRestaurants} />
            <TopRatedRestaurants topRatedFunc={filterTopRatedRestaurants} />
            <div className="flex flex-wrap">
            {filteredRestaurants.map((res)=>
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
