import { useEffect, useState } from "react";
import RestaurentCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("")

  if (resList.length == 0) {
    return (
      <div>
        <Shimmer />
      </div>
    );
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search-bar">
          <input
            onKeyUp={(e) => {
               setSearchText(e.target.value);
              const filteredSearchList = resList.filter((res) => {
                return res.info.name
                  .toUpperCase()
                  .includes(searchText.toUpperCase());
              });
              setFilteredResList(filteredSearchList);
            }}
            className="btn-search"
            type="text"
            placeholder="Search Here ..."
          />
          <button
            className="btn-search"
            onClick={() => {
              const filteredSearchList = resList.filter((res) => {
                return res.info.name
                  .toUpperCase()
                  .includes(searchText.toUpperCase());
              });
              setFilteredResList(filteredSearchList);
            }}
          >
            Search
          </button>
        </div>

        <button
          onClick={() => {
            // filter logic
            let filteredRes = resList.filter((res) => {
              return res.info.avgRating > 4.3;
            });
            setFilteredResList(filteredRes);
          }}
          className="filter-btn"
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredResList.map((restaurant) => {
          return (
            <RestaurentCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
