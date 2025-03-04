function Header(){
    return (
        <nav className="flex justify-between  px-4 border-b-2">
            <img
            className="flex justify-between  px-4 border-b-2"
            src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"
            alt=""
            width="80px"
            height="80px"
            />
            <ul className="flex items-center mr-10 gap-10">
                <li>
                    <a href="">Search</a>
                </li>
                <li>
                    <a href="">Offers</a>
                </li>
                <li>
                    <a href="">Help</a>
                </li>
                <li>
                    <a href="">SignIn</a>
                </li>
                <li>
                    <a href="">Cart</a>
                </li>
                <li></li>
            </ul>
            
            
        </nav>
    )
}

export default Header;