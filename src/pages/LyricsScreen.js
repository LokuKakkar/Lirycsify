// PARAPHRASER API FROM APILAYER
import React, { useState , useEffect } from "react";
import {Link , useLocation} from "react-router-dom"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Lyrics from "../components/Lyrics";
import Header from "../components/Header";
import Grid from '@mui/material/Grid'; // Grid version 1
// import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


export default function LyricsScreen() {

    const location = useLocation();

    

    // var [FullLyrics,setFullLyrics] = useState("");

    //  async function onPageLoad (){
    //     await location.state.paras.map((line,index) =>{

    //         setFullLyrics(FullLyrics + line.words + ". ");
    //         console.log(FullLyrics);
    
    //       })
    // }
    
    

    return (
        <div >
            <Navbar />
            <Header
                albumimg={location.state.albumimg}
                songname = {location.state.songName}
                albumname = {location.state.albumName}
            />

            <div className="lyricsDiv container">
                <div className="row">
                    <div className="col-6">
                        <Lyrics 
                            paras = {location.state.paras}
                            // FullLyrics = {location.state.FullLyrics}

                        />
                    </div>
                    <div className="col-6">
                    


                   <p className="lyricsMeaning">
                        {location.state.meaningresult}
                   </p> 

                    

                    </div>  
                </div>
                  
                        {/* <Item> */}
                            
                        {/* </Item> */}
                    
                        {/* <Item>xs=8</Item> */}
                 
                 
            </div>
            

            <Footer/>
        </div>
    )
}
