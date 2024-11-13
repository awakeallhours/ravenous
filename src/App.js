import logo from './logo.svg';
import './App.css';
import './Components/Business.js';
import Business from './Components/Business.js';
import BusinessList from './Components/BusinessList.js';
import SearchBar from './Components/SearchBar.js';

function App() {
  return (
    <div className="App">
      
      <BusinessList />
      <SearchBar />
    </div>
  );
}

export default App;
