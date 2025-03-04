function RestaurantCard(props){

    const {rating,imageUrl,name,deliveryTime,cuisines}=props.details;
    return(
        <div className="m-4 border w-fit p-3">
            <img 
            src={imageUrl}
            alt="null"
            width="200px"
            className="rounded-xl h-32"
            />
            <h2 className="font-bold">{name}</h2>
            <span>{rating}</span>
            <span>{deliveryTime}</span>
            <p>{cuisines}</p>
        </div>
    );
}
export default RestaurantCard;