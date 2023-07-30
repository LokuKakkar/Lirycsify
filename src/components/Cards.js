import React from "react";
import {Link, useNavigate, useNavigation } from "react-router-dom"
import LyricsScreen from "../pages/LyricsScreen"
import { useState } from "react";
// import  from "react-native"
// import Tilt from 'react-parallax-tilt';

// import Tilt, { Axis } from 'index';

// import './TiltDisableAxis.demozap.scss';





export default function Cards(props) {

  const [line,setline] = useState("");
  const [paras, setparas] = useState([]);
  
  const lyricFetch = () =>{
    
    fetch(
      `https://spotify-lyric-api.herokuapp.com/?url=https://open.spotify.com/track/${props.trackresult}?autoplay=true`  
    )
    .then((response) => response.json())
    .then((datas) => {setparas(datas.lines);
    })
    .catch((err) => console.error(err));

  }

  
  
  const navigate = useNavigate();
  
  const gotoLyricsScreen = () => {
    

    navigate("/lyricsscreen" , {state : 
      {paras : paras ,
      songName : props.data.name ,
      albumName : props.data.albumOfTrack.name ,
      artistnames : props.data.artists ,
      albumimg : props.data.albumOfTrack.coverArt.sources[0].url
    }})

  }
  

  return (
    <div style={{ padding: "10px", border: "none", maxHeight: "443px" }}>
      <div className="card album-cover" style={{ width: "18rem" }}>
        {/* <Link to={props.trackurl} style={{ textDecoration: 'none' , color: 'black'}}> */}
        {/* <Tilt tiltEnable={true} tiltMaxAngleX={0} scale={1.07} tiltReverse={true} > */}
        
        
        
        <div className="album-cover-img">
          <img
              src={props.data.albumOfTrack.coverArt.sources[0].url}
              className="card-img-top img-album-cover-img"
              alt="..."
              onMouseOver={lyricFetch}
              onDoubleClick={gotoLyricsScreen}

            >
            </img>
            <div class="text-over-album-cover">
              <div class="text" onClick={gotoLyricsScreen}> Get Lyrics </div>
            </div>

        </div>


        {/* <Link to="/lyricsscreen" state={props} > */}
        

          

        


        {/* </Link> */}
          

        
        {/* </Tilt> */}
          
        {/* </Link> */}

        <div
          className="card-body"
          style={{
            border: "1px solid white",
            backgroundBlendMode: "hard-light",
          }}
        >
          {/* Song name should only take one line */}
          <h6 className="card-title song-name">

          <Link to={props.trackurl} style={{textDecoration : "none" , color: 'black'}} >
            { props.data.name.length > 33 ? props.data.name.substring(0,31) + "..." :  props.data.name }
          </Link> 
          
          </h6>
          <p className="card-text album-name">
            {/* {props.data.albumOfTrack.name} */}
            <Link to= {props.albumurl} style={{ textDecoration: 'none' , color: 'black' }}>
            { props.data.albumOfTrack.name.length > 33 ? props.data.albumOfTrack.name.substring(0,31) + "..." :  props.data.albumOfTrack.name }
            </Link>
          </p>
          <p className="artist-names">
            {props.data.artists.items.map((item, index) => {
              return(
                <Link  
                to={`https://open.spotify.com/artist/${item.uri.substring(15,item.uri.length)}`} 
                style={{ textDecoration: 'none' , color: 'black' }}
                >
                {index === props.data.artists.items.length - 1 
                ?  item.profile.name  
                :  item.profile.name  + " , "}
                </Link>
              ) 
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
