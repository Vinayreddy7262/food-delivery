import { restaurants } from "../utils/mockData";



function Search(props){

    function handleSearch(searchText){
        const filteredRestaurants=restaurants.filter((res)=>
            res.name.toLowerCase().includes(searchText.toLowerCase())
        );

        props.filterFun(filteredRestaurants);
        

    }
    return(
        <>
            <input type="text" className="border-2 my-2" placeholder="Search for Restaurants"
            onChange={(e) => handleSearch(e.target.value)}
            />
        </>
    );
}

export default Search;