import BusinessList from "./BusinessList";
import './Business.css';

function Business( {image, name, address, city, postcode, category, rating, reviewCount} ) {
    return (
    <div> 
        <ul>
            <li>{name}</li>
            <li>{category}</li>
            <li>Rating {rating}</li>
            <li>Reviews {reviewCount}</li>
            <li><img src={image}/></li>
        </ul>
    </div>
    );
};

    export default Business;