import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Tilt from 'react-parallax-tilt';



function Home() {
    const [d, setd] = useState("");
    const [name, setname] = useState("");
    const [container, setcontainer] = useState([]);
    const [ok, setok] = useState(false);
  
    const fetchTracks = () => {
      fetch(
        `https://spotify23.p.rapidapi.com/search/?q=+${
          ok ? d : "Weeknd"
        }&type=tracks&offset=0&limit=10&numberOfTopResults=5`,
        {
          method: "GET",
          headers: {
            'X-RapidAPI-Key': '824daf9475mshd1b6b228ca07a65p100555jsn99c48eaeb5a9',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
          },
        }
      )
        .then((response) => response.json())
        .then((datas) => setcontainer(datas.tracks.items))
        .catch((err) => console.error(err));
    };
  
  
     
  
  
  
  
    const search = (e) => {
      setd(e.target.value);
    };
    const hehe = (e) => {
      e.preventDefault();
      setok(true);
      setname(d);
      // console.log(name);
    };
    useEffect(() => {
      fetchTracks();
    }, [name]);
  
    return (
      <div>
        {/* <div>
            <form onSubmit={hehe}>
              <div className="data">
                <div >
                  <input  className="input" type="text" value={d} onChange={(e)=>setd(e.target.value) }/>
                </div >
                <div >
                  <button type="submit">Submit</button>
                </div >
              </>
              {container.map((item) =>{
          return (
            <div className='searchResults'>
              <p className='songName' >{item.data.name}</p>
              <p className='albumName'>{item.data.albumOfTrack.name}</p>
              <p className='artists'>
                { item.data.artists.items.map((artist) =>{
                  return artist.profile.name + "  ";
                })
                }
              </p>
            </div>
          )
        })} 
        </form>
          </div> */}
  
        <Navbar />
        <SearchBar name={d} onChange={search} onSubmit={hehe} />
        <div className="d-flex flex-row flex-nowrap overflow-y-hidden overflow-x-scroll okaish">
          {container.map((item, index) => {
            let text = item.data.uri;
            let albtext = item.data.albumOfTrack.uri;
            let trackresult = text.substring(14, text.length);
            let albumresult = albtext.substring(14, albtext.length);;
            let trackurl = "https://open.spotify.com/track/" + trackresult;
            let albumurl = "https://open.spotify.com/album/" + albumresult;
            let artists = item.data.artists.items;
            return (
              <Tilt tiltEnable={false} scale={1.07} >
              <Cards
                  key={index}
                  className="card card-body m-2"
                  {...item}
                  trackurl={trackurl}
                  albumurl={albumurl}
                  trackresult={trackresult}
                />
              </Tilt>
                
              
  
              
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
  
  export default Home;
  