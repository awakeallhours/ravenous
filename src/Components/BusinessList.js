import Business from "./Business";


function BusinessList() {
    const businesses = [
        {name:"Cakes by Ling",
        category: "Dessert Shop", 
        rating: 5, 
        reviewCount: 124, 
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/03/ce/8c/the-mandarin-cake-shop.jpg?w=1200&h=-1&s=1",
        },
        {name:"Cakes by Col",
        category: "Dessert Shop", 
        rating: 3, 
        reviewCount: 2, 
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/03/ce/8c/the-mandarin-cake-shop.jpg?w=1200&h=-1&s=1",
        }
    ];
    
    return (
    <div>
        
        <ul>
        {businesses.map((business) => (
        <Business
        key={business.name}
        name={business.name}
        category={business.category}
        image={business.image}
        rating={business.rating}
        reviewCount={business.reviewCount}
        address={business.address}
        city={business.city}
        postcode={business.postcode}
        /> 
        
    ))}
        </ul>

       
        
    </div>
    )
};

export default BusinessList;