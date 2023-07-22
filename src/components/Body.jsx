import ResCards from "./ResCards";
import { restaurantList } from '../constants';
import { useState, useEffect } from "react";
import { swiggy_api_URL } from "../constants";
import Shimmer from "./Shimmer";

function filterData(searchText, restt) {
  const filterData = restt.filter((restt) =>
    restt?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

function Body() {
  const [allrestt, setallrestt] = useState([]);
  const [filteredrestt, setfilteredrestt] = useState([]);
  const [searchInput, setsearchInput] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const data = await fetch(swiggy_api_URL);
      const json = await data.json();
      // updated state variable restaurants with Swiggy API data
      setallrestt(json?.data?.cards[2]?.data?.data?.cards);
      setfilteredrestt(json?.data?.cards[2]?.data?.data?.cards);
      console.log(json)
    } catch (error) {
      console.log(error);
    }
  }
  return allrestt.length === 0 ? (<Shimmer />) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search to kar..."
          value={searchInput}
          onChange={(e) => { setsearchInput(e.target.value) }}
        ></input>
        <button
          className="search-btn" onClick={() => { setfilteredrestt(filterData(searchInput, allrestt)); }}>
          Search
        </button>
      </div>
      <div className='body'>
        {filteredrestt.map((restaurant) => {
          return <ResCards key={restaurant.data.id} {...restaurant.data} />;
        })}
        <h3>
          React ⚛️ + Vite ⚡ + Replit 🌀+ kkkhg
        </h3>
      </div>
    </>
  )
}
export default Body;