import React, { useState, useEffect } from "react";  
import Chart from "../components/Chart";

const SongsContainer = () => {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs();
  })

  const getSongs = function(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(songs => setSongs(songs.feed.entry) )
  }

  return(
    <div>
      <h3>UK Top 20</h3>
      <Chart songs={songs}/>
    </div>
  )
}

export default SongsContainer;