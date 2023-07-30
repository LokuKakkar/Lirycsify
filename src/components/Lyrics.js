import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer"

export default function Lyrics(props) {

  // const [line,setline] = useState("");
  // console.log(props.paras[0].words)
  

    return (
        <div>
            <div className="lyrics">

              {props.paras.map((line,index) => {
                return (

                  <p className="lyrics"> 
                  {line.words}
                  </p>

                )

              })}

            </div>
        </div>
    )


}