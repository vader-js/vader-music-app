import React from "react";
import { topchats } from "../../SkeletonFrame";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import "./index.css"
// import favorite from "../../images/favorite.png"

export default function TopChats() {
  return (
    <div className="topchatswrapper">
      {topchats.map((chats) => {
        return (
          <Link to={`info/${chats.id}`} key={chats.id}>
           <div key={chats.id} className="songtemplate"> 
            <div className="imagetile">
              <img src={chats.image} alt="songtile" />
            </div>
            <div className="aboutsongwrapper">
              <ul className="aboutsong">
                {chats.about.map((about, index) => {
                return <li key={index}>{about}</li>;
                })}
              </ul>
            </div>
            <div className="likebutton">
              <div className="likebuttonwrapper">
                {/* <img src={favorite} alt="favorite" />     */}
                <div className="favoritewrapper">
                <FavoriteBorderOutlinedIcon className="favorite" sx={{backgroundColor:"inherit", color:"#FACD66"} } />
                </div>
                </div>
            </div>
          </div>
        </Link>
        );
      })}
    </div>
  );
}
