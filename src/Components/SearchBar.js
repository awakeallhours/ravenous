import './SearchBar.css';

export default function SearchBar() {
    
    return (
        <div>
            <form id="searchBar">
                <input type="search" name="searchTerm" placeholder="What to eat?" ></input>   
                <input type="search" name="searchLocaion" placeholder="Where to eat?"></input>
            </form>
            <div id="submitButton">
                <button type="submit">Search</button>
            </div>
        </div>
    );
};