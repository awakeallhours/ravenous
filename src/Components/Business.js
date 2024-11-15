import BusinessList from "./BusinessList";
import './Business.css';

function Business( {image, name, address, city, postcode, category, rating, reviewCount} ) {
    return (
    <div id="container"> 
        <div >
        <ul>
            <li>{name}</li>
            <li>{category}</li>
            <li>Rating {rating}</li>
            <li>Reviews {reviewCount}</li>
            <li id="img"><img src={image}/></li>
        </ul>
        </div>
    </div>
    );
};

    export default Business;