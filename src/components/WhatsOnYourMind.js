import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const WhatsOnYourMind = () => {
  const [whatsOn, setWhatsOn] = useState(
    []
  );
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0044745&lng=72.55311549999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log("what", json.cards.card.imageGridCards.info);
    console.log("hey im from whats on your mind part");
    console.log("hey ::", json.data.cards[0].card.card.imageGridCards.info);
    setWhatsOn(json.data.cards[0].card.card.imageGridCards.info);
  };

  if (whatsOn.length == 0) {
    return <Shimmer />;
  }
  return (
    <div className="on-your-mind">
      <h3>What's On Your Mind ?</h3>
      {whatsOn.map((food) => {
        return <WhatsOnYourMind key={food.id} />;
      })}
    </div>
     
  );