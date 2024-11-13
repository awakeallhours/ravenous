
export default function SearchBar() {
    
    return (
        <div>
            <form id="searchBar">
                <input type="search" name="searchTerm" placeholder="What do you want to eat?" ></input>   

            </form>
            <form id="searchBar">
                <input type="search" name="searchLocaion" placeholder="Where do you want to eat it?"></input>
            </form>
        </div>
    );
};