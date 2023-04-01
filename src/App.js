import React, { useEffect, useState } from "react";
import './Components/style.css';
import { AnimeList } from "./Components/AnimeList";
import IconButton from '@mui/material/IconButton';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
function App() {

  const [search, setSearch] = useState('');
  const [page,setPage]=useState(0);
  const [animeData, setAnimeData]=useState();
  const [animeInfo, setAnimeInfo]=useState();
  const [myAnimeList, setMyAnimeList] = useState([]);

  const addTo=(anime)=>{
    const newArray=[...myAnimeList,anime]
    setMyAnimeList(newArray);
  }
 
 
   const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/characters?page=${page}&limit=15&q=${search}&order_by=favorites&sort=desc`);
    const resData = await res.json();
    setAnimeData(resData.data);
  }
  useEffect(() => {
    getData()
  }, [search])

  const addPage=()=>{
    setPage(page+1);
    console.log(page)
    getData()
    
  }
  const removePage=()=>{
    setPage(page-1);
    getData()
  }
  return <>
  <div className="header">
<h1>Search Anime Characters</h1>
<div className="search-box">
<input type="search" placeholder="Search your anime" 
onChange={(e)=>setSearch(e.target.value)}
/>
</div>
  </div>
  
  <div className="container">
<div className="anime-row">
  <h2 className="text-heading">Anime</h2>
  <div className="row">
    <AnimeList
     animelist={animeData}
     />
  </div>
  
<IconButton color="primary" aria-label="upload picture" component="label" onClick={() => removePage("clicked")}>

  <ArrowCircleLeftIcon />
</IconButton>
<IconButton color="primary" aria-label="upload picture" component="label" onClick={() => addPage("clicked")}>
  <ArrowCircleRightIcon />
</IconButton>
  </div>
  </div>
  </>;
}

export default App;
