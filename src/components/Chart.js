import React from "react";  
import Song from "./Song";

const Chart = ({songs, index}) => {

  const songItems = songs.map((songs, index) => {
    return <Song label={songs.title.label} key={index}/>
  })

  return(
    <div>
    <ol>
      {songItems}
    </ol>
    </div>
  )
}

export default Chart;